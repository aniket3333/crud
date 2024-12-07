import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const EMPLOYEE_SERVICE = new InjectionToken('employee service');
export interface IEmployeeService{
/**
 * get employee list
 * @param searchModel
 */
getAllEmployeeList(searchModel:any):Observable<any>;
}