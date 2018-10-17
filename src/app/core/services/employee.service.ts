import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Employee }   from '../models/employee';

@Injectable()
export class EmployeeService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getEmployees(): Observable<Employee[]> {
    return this.apiService.employee.getEmployees();
  }

  public getEmployeesByCompanyKey(companyKey: string): Observable<Employee[]> {
    return this.apiService.employee.getEmployeesByCompanyKey(companyKey);
  }

  public updateEmployeeList(employee: Employee): Observable<Employee> {
    return this.apiService.employee.updateEmployeeList(employee);
  }
}
