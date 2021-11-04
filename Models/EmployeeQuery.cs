using System;

namespace ApiFuncionarios.Models
{
    public class EmployeeQuery
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Office { get; set; }
        public DateTime? BirthDate { get; set; }
        public decimal? Wage { get; set; }
        public bool? Active { get; set; }
        public char? Sex { get; set; }        

    }
}
