using ApiFuncionarios.Models;
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

namespace ApiFuncionarios.Controllers
{
    [Route("[Controller]")]
    public class EmployeeController : Controller
    {
        private readonly ILogger<EmployeeController> _logger;
        private IDbConnection _dbConnection;

        public EmployeeController(ILogger<EmployeeController> logger, IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
            _logger = logger;
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public Employee Post([FromBody] Employee employee)
        {
            Funcionario funcionario = employee.AsFuncionario();

            var parameters = new Dictionary<string, object>()
            {
                {"@Nome", funcionario.Nome},
                {"@Cargo", funcionario.Cargo},
                {"@DataNascimento", funcionario.DataNascimento},
                {"@Salario", funcionario.Salario},
                {"@Ativo", true},
                {"@Sexo", funcionario.Sexo},
                {"@DataCriacao", DateTime.Now},
                {"@DataAtualizacao", DateTime.Now},
                {"@DiasAfastado", 0 },
                {"@Deletado", false},
            };

            var employeeId = _dbConnection.QuerySingle<long>
                ("INSERT INTO Funcionarios (Nome, Cargo, DataNascimento, Salario, Ativo, Sexo, DataCriacao, DataAtualizacao, DiasAfastado, Deletado) " +
                ""  + " VALUES (@Nome, @Cargo, @DataNascimento, @Salario, @Ativo, @Sexo, @DataCriacao, @DataAtualizacao, @DiasAfastado, @Deletado); " + 
                " SELECT CAST(SCOPE_IDENTITY() as int);", new DynamicParameters(parameters));
            employee.Id = (int)employeeId;
            return employee;
        }

        [HttpGet]
        [Route("{employeeId}")]
        public Employee Get(int employeeId)
        {
            var query = new StringBuilder();
            query.Append("SELECT * FROM Funcionarios ")
                 .Append($" WHERE Funcionarios.Id = {employeeId} ")
                 .Append(" AND Funcionarios.Deletado = 0 ");
            var parameters = new DynamicParameters();

            var funcionario = _dbConnection.QueryFirstOrDefault<Funcionario>(query.ToString(), parameters);
            if(funcionario == null)
            {
                return null;
            }
            Employee employee = new Employee();
            employee = funcionario.AsEmployee();
            return employee;
        }


        [HttpPut]
        public Employee Put([FromBody] Employee employee)
        {
            Funcionario funcionario = new Funcionario();
            funcionario = employee.AsFuncionario();

            var parameters = new Dictionary<string, object>()
            {
                {"@Nome", funcionario.Nome },
                {"@Cargo", funcionario.Cargo},
                {"@DataNascimento", funcionario.DataNascimento },
                {"@Salario", funcionario.Salario},
                {"@Ativo", funcionario.Ativo },
                {"@Sexo", funcionario.Sexo},
                {"@DataAtualizacao", DateTime.Now },
                {"@DiasAfastado", funcionario.DiasAfastado }
            };

            _dbConnection.Execute($"UPDATE Funcionarios SET Nome=@Nome, Cargo=@Cargo, DataNascimento=@DataNascimento, Salario=@Salario," +
                $" Ativo=@Ativo, Sexo=@Sexo, DataAtualizacao=@DataAtualizacao, DiasAfastado=@DiasAfastado WHERE Funcionarios.id = {employee.Id}", new DynamicParameters(parameters));
            return employee;
        }

        

        [HttpDelete]
        [Route("{employeeId}")]
        public void Delete(int employeeId)
        {
            _dbConnection.Execute($"UPDATE Funcionarios SET Deletado=1 WHERE Funcionarios.id = {employeeId}");
        }

        [HttpPost]
        [Route("list")]
        public List<Employee> List([FromBody] EmployeeQuery employeeQuery)
        {
            var query = new StringBuilder();
            var where = new StringBuilder();
            where.Append(" WHERE Funcionarios.Deletado = 0 ");

            if (employeeQuery != null)
            {
                if (employeeQuery.Id != null)
                {
                    where.Append($" AND Funcionarios.Id = {employeeQuery.Id} ");
                }
                if (employeeQuery.Name != null)
                {
                    where.Append($" AND Funcionarios.Nome = {employeeQuery.Name} ");
                }
                if (employeeQuery.Office != null)
                {
                    where.Append($" AND Funcionarios.Cargo = {employeeQuery.Office} ");
                }
                if (employeeQuery.BirthDate != null)
                {
                    where.Append($" AND Funcionarios.DataNascimento = {employeeQuery.BirthDate} ");
                }
                if (employeeQuery.Wage != null)
                {
                    where.Append($" AND Funcionarios.Salario = {employeeQuery.Wage} ");
                }
                if (employeeQuery.Active != null)
                {
                    where.Append($" AND Funcionarios.Ativo = {employeeQuery.Active} ");
                }
                if (employeeQuery.Sex != null)
                {
                    where.Append($" AND Funcionarios.Sexo = {employeeQuery.Sex} ");
                }
            }

            query.Append($"SELECT * FROM Funcionarios {where} ");
            query.Append(" Order By Funcionarios.Id ");

            var parameters = new DynamicParameters();

            IEnumerable<Funcionario> funcionarios = _dbConnection.Query<Funcionario>(query.ToString(), parameters);
            List<Employee> employeeList = new List<Employee>();
            foreach (Funcionario funcionario in funcionarios)
            {
                employeeList.Add(funcionario.AsEmployee());
            }

            return employeeList;
        }

        [HttpGet]
        [Route("comboEmployee")]
        public List<ComboItem> Combo()
        {
            var query = new StringBuilder();
            query.Append("SELECT Funcionarios.Id [Id], Funcionarios.Nome [Text] FROM Funcionarios ")
                 .Append(" WHERE Funcionarios.Deletado = 0 ");

            var parameters = new DynamicParameters();

            IEnumerable<Funcionario> funcionarios = _dbConnection.Query<Funcionario>(query.ToString(), parameters);
            List<ComboItem> comboEmployeeList = new List<ComboItem>();
            foreach (Funcionario funcionario in funcionarios)
            {
                var comboEmployeeItem = new ComboItem();
                comboEmployeeItem.Id = funcionario.Id;
                comboEmployeeItem.Text = funcionario.Nome;
                comboEmployeeList.Add(comboEmployeeItem);
            }
            return comboEmployeeList;
        }
    }
}
