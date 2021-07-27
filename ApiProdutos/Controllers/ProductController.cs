using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProdutos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        private IDbConnection _dbConnection;
        public ProductController(ILogger<ProductController> logger, IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
            _logger = logger;
        }

        [HttpPost]
        public Product Post([FromBody] Product product)
        {
            Produto produto = new Produto();
            produto = product.AsProduto();

            var parameters = new Dictionary<string, object>()
            {
                {"@Codigo", produto.Codigo },
                {"@Descricao", produto.Descricao },
                {"@Estoque", produto.Estoque },
                {"@Preco", produto.Preco },

            };

            var productId = _dbConnection.QuerySingle<long>("INSERT INTO Produtos (Codigo, Descricao, Estoque, Preco) VALUES (@Codigo, @Descricao, @Estoque, @Preco); SELECT CAST(SCOPE_IDENTITY() as int);", new DynamicParameters(parameters));
            product.Id = (int)productId;
            return product;
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new Product
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();
        }

        //[HttpGet]
        //public IEnumerable<Product> Get()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new Product
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
    }
}
