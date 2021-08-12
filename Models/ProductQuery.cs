using System;

namespace ApiProduct2.Models
{
    public class ProductQuery
    {
        public int? Id { get; set; }

        public int? Code { get; set; }

        public string Description { get; set; }

        public int? Amount { get; set; }

        public decimal? Value { get; set; }
    }
}
