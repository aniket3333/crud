import { Component, Inject, OnInit } from "@angular/core";
import { Employee } from "../../models/employee.model";
import { EMPLOYEE_SERVICE, IEmployeeService } from "../../services/Iempoyee.service";
import { EmployeeService } from "../../services/employee.service";
import { EmployeeSearch } from "../../models/employeesearch.model";

@Component({
    selector: "app-employee-list",
    templateUrl: "./employee-list.component.html",
  })
  export class EmployeeListComponent implements OnInit {
    employeeList : Employee[]=[];
    employeeSearch:EmployeeSearch;
    constructor(@Inject(EMPLOYEE_SERVICE) private _employeeService:IEmployeeService){}
    ngOnInit(): void {
        this.employeeSearch = new EmployeeSearch();
        this.getEmployeeList();
    }

    getEmployeeList()
    {
        this._employeeService.getAllEmployeeList(this.employeeSearch).subscribe((res)=>{
console.log(res);
        },(error)=>{
            console.log(error);
        });
    }
  }
  