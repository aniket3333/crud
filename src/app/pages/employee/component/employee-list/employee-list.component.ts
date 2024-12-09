import { Component, Inject, OnInit } from "@angular/core";
import { Employee } from "../../models/employee.model";
import { EMPLOYEE_SERVICE, IEmployeeService } from "../../services/Iempoyee.service";
import { EmployeeSearch } from "../../models/employeesearch.model";
import { Router } from "@angular/router";

@Component({
    selector: "app-employee-list",
    templateUrl: "./employee-list.component.html",
  })
  export class EmployeeListComponent implements OnInit {
    employeeList : Employee[]=[];
    employeeSearch:EmployeeSearch;
    constructor(@Inject(EMPLOYEE_SERVICE) private _employeeService:IEmployeeService,private router:Router){}
    ngOnInit(): void {
        debugger
        this.employeeSearch = new EmployeeSearch();
        this.employeeSearch.empname = 'aniket';
        this.getEmployeeList();
    }

    getEmployeeList()
    {
        this._employeeService.getAllEmployeeList(this.employeeSearch).subscribe((res)=>{
console.log(res);
this.employeeList = res;
        },(error)=>{
            console.log(error);
        });
    }
    navigate(){
this.router.navigate(['/add-employee']);
    }
   
  }
  