import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeSearch } from '../models/employeesearch.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { IEmployeeService } from './Iempoyee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements IEmployeeService {
private apiUrl = 'https://localhost:7023/'
  constructor(private _http:HttpClient) { }


  getAllEmployeeList(searchModel: EmployeeSearch): Observable<Employee[]> {
    if(!searchModel)
    {
      console.log('search model is empty');
    }
    let params = new HttpParams()
    .set("empname",searchModel.empname);
     return   this._http.get<Employee[]>(this.apiUrl,{params});
  }
}
