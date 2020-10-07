import { Injectable } from '@angular/core';
import{Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiurl:string;
  constructor(private _httpClient: HttpClient) {
    this.apiurl= environment.webApiUrl;
   }
   public getEmployees():Observable<Employee[]>
   {
     return this._httpClient.get<Employee[]>(this.apiurl);
   }
   public getEmployee(empId: string):Observable<Employee>
   {
     return this._httpClient.get<Employee>(this.apiurl+'/'+empId);
   }
   public addEmployee(emp:Employee):Observable<string> {
    return this._httpClient.post<string>(this.apiurl, emp);
   }
   public modifyEmployee(emp: Employee): Observable<string>{
     return this._httpClient.put<string>(this.apiurl,emp)
   }
   public deleteEmployee(empId: string): Observable<string>{
    return this._httpClient.delete<string>(this.apiurl+'/'+empId);
  }
}
