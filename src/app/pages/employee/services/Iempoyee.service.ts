import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeSearch } from "../models/employeesearch.model";
import { Employee } from "../models/employee.model";

export const EMPLOYEE_SERVICE = new InjectionToken('employee service');
export interface IEmployeeService{
/**
 * get employee list
 * @param searchModel
 */
getAllEmployeeList(searchModel:EmployeeSearch):Observable<Employee[]>;

/**
 * add employee
 * @param postModel
 */
addEmployee(postModel:Employee):Observable<any>;
}