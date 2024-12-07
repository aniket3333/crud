import { Provider } from "@angular/core";
import { EMPLOYEE_SERVICE } from "./services/Iempoyee.service";
import { EmployeeService } from "./services/employee.service";

export const providerList:Provider[] = [
    {
        provide:EMPLOYEE_SERVICE,
        useClass:EmployeeService
    }
];