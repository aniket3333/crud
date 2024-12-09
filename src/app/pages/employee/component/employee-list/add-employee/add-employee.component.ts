import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  navigate(){
    this.router.navigate(['/employee-list']);
        }
}
