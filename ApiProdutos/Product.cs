using System;

namespace ApiProdutos
{
    public class Product
    {
        public int Id { get; set; }

        public int Code { get; set; }

        public string Description { get; set; }

        public int Amount { get; set; }

        public decimal Value { get; set; }

        public Produto AsProduto()
        {
            var produto = new Produto();
            produto.Id = Id;
            produto.Codigo = Code;
            produto.Descricao = Description;
            produto.Estoque = Amount;
            produto.Preco = Value;
            
            return produto;
        }

    }
}
