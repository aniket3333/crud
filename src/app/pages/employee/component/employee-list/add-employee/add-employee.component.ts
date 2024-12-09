import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeAddForm } from '../../../models/employee-form.model';
import { EMPLOYEE_SERVICE, IEmployeeService } from '../../../services/Iempoyee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeAddForm: EmployeeAddForm;
  get f(){
    return this.employeeAddForm.controls;
  }
  constructor(private router: Router,@Inject(EMPLOYEE_SERVICE) private _employeeService:IEmployeeService) { }
  ngOnInit(): void {
    this.employeeAddForm = new EmployeeAddForm();

  }
  submit(){
    let model = this.employeeAddForm.getFormData();
    console.log(model);
    this._employeeService.addEmployee(model).subscribe((res)=>{
      console.log(res);
              },(error)=>{
                  console.log(error);
              });
  }
  navigate() {
    this.router.navigate(['/employee-list']);
  }
}
