import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { IEmployee }  from '../models/employee';

@Injectable()
export class EmployeeService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.apiService.employee.getEmployees();
  }

  public getEmployeesByCompanyKey(companyKey: string): Observable<IEmployee[]> {
    return this.apiService.employee.getEmployeesByCompanyKey(companyKey);
  }

  public updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.apiService.employee.updateEmployee(employee);
  }
}
