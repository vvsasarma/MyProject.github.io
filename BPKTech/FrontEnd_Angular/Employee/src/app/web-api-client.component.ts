import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-web-api-client',
  templateUrl: './web-api-client.component.html',
  styles: [
  ]
})
export class WebApiClientComponent implements OnInit {
employees: Employee[];
newEmployee:Employee;
editEmp:Employee;
  constructor(private _employeeService: EmployeeService) {
    this._employeeService.getEmployees().subscribe((res:Employee[])=>{
      this.employees = res;
    }),
    (err)=>{
      alert('Server Error')
    }
   }
   ClearRecord(emp:Employee)
   {
     emp.Id = null,
     emp.FirstName='',
     emp.LastName='',
     emp.City='',
     emp.PhoneNumber=null
   }
   addEmployee(){
     this._employeeService.addEmployee(this.newEmployee).subscribe((res:string)=>{
       if(res=='fail')
        alert('Employee already exists');
      else
        this.employees.push(this.newEmployee);
        this.ClearRecord(this.newEmployee);
        alert('Employee added sucessfully');
     }),
     (err)=>{
       alert('Server error');
     }
   }
   editEmployee(empId: string)
   {
     this._employeeService.getEmployee(empId).subscribe((res:Employee)=>{
       this.editEmp = res;
     })
   }
   deleteEmployee(empId: string, indexNumber: number)
   {
     if (window.confirm('Do you want to delete employee?')){
     this._employeeService.deleteEmployee(empId).subscribe((res:string)=>{
       this.employees.splice(indexNumber,1)
       alert('Employee delete succesfully');
     }),
     (err)=>{
       alert('server error');
     }
    }
   }
   modifyEmployee()
   {
     this._employeeService.modifyEmployee(this.editEmp).subscribe((res:string)=>{
       let empInfo=this.employees.find(e=>e.Id == this.editEmp.Id);
       empInfo.FirstName = this.editEmp.FirstName;
       empInfo.LastName= this.editEmp.LastName;
       empInfo.City = this.editEmp.City;
       empInfo.PhoneNumber=this.editEmp.PhoneNumber;
       this.ClearRecord(this.editEmp);
       alert('Employee details modified successfully');
     }),
     (err)=>{ alert('server error');}
   }

  ngOnInit(): void {
  }

}
