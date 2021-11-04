using System;

namespace ApiFuncionarios.Models
{
    public class Funcionario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cargo { get; set; }
        public DateTime DataNascimento { get; set; }
        public decimal Salario { get; set; }
        public bool Ativo { get; set; }
        public char? Sexo { get; set; }
        public DateTime DataCriacao {  get; set; }
        public DateTime DataAtualizacao { get; set; }
        public decimal DiasAfastado {  get; set; }
        public bool Deletado { get; set; }

        public Employee AsEmployee()
        {
            var employee = new Employee();
            employee.Id = Id;
            employee.Name = Nome;
            employee.Office = Cargo;
            employee.BirthDate = DataNascimento;
            employee.Wage = Salario;
            //employee.Active = Ativo;
            employee.Sex = Sexo;
            //employee.DaysAway = DiasAfastado;

            return employee;
        }

    }
}
