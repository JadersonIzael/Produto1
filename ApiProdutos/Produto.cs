using System;

namespace ApiProdutos
{
    public class Produto
    {
        public int Id { get; set; }

        public int Codigo { get; set; }

        public string Descricao { get; set; }

        public int Estoque { get; set; }

        public decimal Preco { get; set; }

        public bool Deletado { get; set; }

        public Product AsProduct()
        {
            var product = new Product();
            product.Id = Id;
            product.Code = Codigo;
            product.Description = Descricao;
            product.Amount = Estoque;
            product.Value = Preco;

            return product;
        }

    }
}
