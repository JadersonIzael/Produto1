using System;

namespace ApiFuncionarios.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Office { get; set; }
        public DateTime BirthDate { get; set; }
        public decimal Wage { get; set; }
        //public bool Active { get; set; }
        public char? Sex { get; set; }
        //public DateTime DaysAway { get; set; }

        public Funcionario AsFuncionario()
        {
            var funcionario = new Funcionario();
            funcionario.Id = Id;
            funcionario.Nome = Name;
            funcionario.Cargo = Office;
            funcionario.DataNascimento = BirthDate;
            funcionario.Salario = Wage;
            //funcionario.Ativo = Active;
            funcionario.Sexo = Sex;
            //funcionario.DiasAfastado = DaysAway;

            return funcionario;
        }

    }
}
