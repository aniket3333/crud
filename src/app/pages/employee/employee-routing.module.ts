import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './component/employee-list/add-employee/add-employee.component';

const routes: Routes = [
  {path:'', redirectTo:'employee-list',pathMatch:'full'},
  {path:'employee-list', component:EmployeeListComponent},
  {path:'add-employee', component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
