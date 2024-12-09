import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { providerList } from './employee-provider.registrar';
import { AddEmployeeComponent } from './component/employee-list/add-employee/add-employee.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule
  ],
  providers:[providerList]
})
export class EmployeeModule { }
