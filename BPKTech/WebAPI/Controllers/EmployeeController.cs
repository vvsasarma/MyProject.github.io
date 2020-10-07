using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using MyProject.Models;

namespace MyProject.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class EmployeeController : ApiController
    {
        EmployeeEntities obj = new EmployeeEntities();
        public List<Employee> getEmployees()
        {
            return obj.Employees.ToList();
        }
        public Employee getEmployee(string id)
        {
            var empInfo = obj.Employees.Find(id);
            return empInfo;
        }
        public string postEmployee(Employee emp)
        {
            try
            {
                obj.Employees.Add(emp);
                obj.SaveChanges();
                return "Employee inserted successfully";
            }
            catch (Exception ex)
            {
                return "Failure"+ ex.Message;
            }
        }
        public string putEmployee(Employee emp)
        {
            var empInfo = obj.Employees.Find(emp.Id);
            empInfo.FirstName = emp.FirstName;
            empInfo.LastName = emp.LastName;
            empInfo.City = emp.City;
            empInfo.PhoneNumber = emp.PhoneNumber;
            obj.SaveChanges();
            return "Employee details updated successfully";
        }
        public string deleteEmployee(string id)
        {
            var empInfo = obj.Employees.Find(id);
            obj.Employees.Remove(empInfo);
            obj.SaveChanges();
            return "Employee deleted successfully";
        }
    }
}
