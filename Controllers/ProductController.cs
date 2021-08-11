using ApiProduct2.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiProduct2.Controllers
{
    [Route("[controller]")]
    public class ProductController : Controller
    {        
        private readonly ILogger<ProductController> _logger;

        private IDbConnection _dbConnection;
        public ProductController(ILogger<ProductController> logger, IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
            _logger = logger;
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("Post")]
        public Product Post([FromBody] Product product)
        {
            Produto produto = product.AsProduto();

            var parameters = new Dictionary<string, object>()
            {
                {"@Codigo", produto.Codigo },
                {"@Descricao", produto.Descricao },
                {"@Estoque", produto.Estoque },
                {"@Preco", produto.Preco },
                {"@Deletado", false },

            };

            var productId = _dbConnection.QuerySingle<long>("INSERT INTO Produtos (Codigo, Descricao, Estoque, Preco, Deletado) VALUES (@Codigo, @Descricao, @Estoque, @Preco, @Deletado); SELECT CAST(SCOPE_IDENTITY() as int);", new DynamicParameters(parameters));
            product.Id = (int)productId;
            return product;
        }

        [HttpPut]
        [Route("Put")]
        public Product Put([FromBody] Product product) //patch é update
        {
            // mapeamento
            Produto produto = new Produto();
            produto = product.AsProduto();
            //Abaixo parametro da query do dapper
            var parameters = new Dictionary<string, object>()
            {
                {"@Codigo", produto.Codigo },
                {"@Descricao", produto.Descricao },
                {"@Estoque", produto.Estoque },
                {"@Preco", produto.Preco },
                
            };
            //
            _dbConnection.Execute($"UPDATE Produtos SET Codigo=@Codigo, Descricao=@Descricao, Estoque=@Estoque, Preco=@Preco WHERE Produtos.id = {product.Id}", new DynamicParameters(parameters));
            return product;
        }

        [HttpDelete]
        [Route("{productId}")]
        public void Delete(int productId ) 
        {
            _dbConnection.Execute($"UPDATE Produtos SET Deletado=1 WHERE Produtos.id = {productId}");            
        }

        [HttpGet]
        [Route("{productId}")]
        public Product Get(int productId)
        {
            var query = new StringBuilder();
            query.Append("SELECT * FROM Produtos ")
                 .Append($"WHERE Produtos.Id = {productId} ")
                 .Append("AND Produtos.Deletado = 0");
            var parameters = new DynamicParameters();

            //mapamento
            var produto = _dbConnection.QueryFirstOrDefault<Produto>(query.ToString(), parameters);
            if (produto == null)
            {
                //return new Produto(); retorna uma tabela vazia
                return null;
            }
            Product product = new Product();
            product = produto.AsProduct();
            return product;
        }

        [HttpGet]
        [Route("list")]
        public List<Product> List()
        {
            var query = new StringBuilder();
            query.Append("SELECT * FROM Produtos")
                 .Append("WHERE Produtos.Deletado = 0");

            var parameters = new DynamicParameters();

            IEnumerable<Produto> produtos = _dbConnection.Query<Produto>(query.ToString(), parameters);
            List<Product> productList = new List<Product>();
            foreach(Produto produto in produtos)
            {
                productList.Add(produto.AsProduct());
            } 
            
            return productList;
        }
        [HttpGet]
        [Route("combo")]
        public List<ComboItem> Combo()
        {
            var query = new StringBuilder();
            query.Append("SELECT Produtos.Id, Produtos.Descricao FROM Produtos ")
                 .Append("WHERE Produtos.Deletado = 0");

            var parameters = new DynamicParameters();

            IEnumerable<Produto> produtos = _dbConnection.Query<Produto>(query.ToString(), parameters);
            List<ComboItem> comboList = new List<ComboItem>();
            foreach (Produto produto in produtos)
            {
                var comboItem = new ComboItem();
                comboItem.Id = produto.Id;
                comboItem.Text = produto.Descricao;
                comboList.Add(comboItem);
            }

            return comboList;
        }
    }
}
