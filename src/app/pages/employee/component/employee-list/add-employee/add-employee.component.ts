import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeAddForm } from '../../../models/employee-form.model';

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
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.employeeAddForm = new EmployeeAddForm();

  }
  submit(){
    let model = this.employeeAddForm.getFormData();
    console.log(model);
  }
  navigate() {
    this.router.navigate(['/employee-list']);
  }
}
