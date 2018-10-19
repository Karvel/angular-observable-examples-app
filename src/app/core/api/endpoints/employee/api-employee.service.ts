import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {
  AngularFireDatabase,
  AngularFireList,
}                      from '@angular/fire/database';

import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import { IEmployee }   from 'src/app/core/models/employee';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiEmployeeService {
  private dbPath: string = '/employees';
  public employeeRef: AngularFireList<IEmployee>;

  constructor(
    private httpClient: HttpClient,
    private rtdb: AngularFireDatabase,
  ) {
    this.employeeRef = rtdb.list(this.dbPath);
  }

  public addEmployee(employee: IEmployee): void {
    this.employeeRef.push(employee);
  }

  public getEmployees(): Observable<IEmployee[]> {
    return this.employeeRef.snapshotChanges().pipe(
      map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() }))),
      map(employeeList => employeeList as IEmployee[]),
    );
  }

  public getEmployeesByCompanyKey(companyKey: string): Observable<IEmployee[]> {
    return this.rtdb.list(this.dbPath, ref => ref
      .orderByChild('companyKey')
      .equalTo(`${companyKey}`))
      .snapshotChanges().pipe(
        map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() }))),
        map(employeeList => employeeList as IEmployee[]),
      );
  }

  public updateEmployee(employee: IEmployee): Observable<IEmployee> {
    const restfulDBPathWithQueries = `${environment.firebase.databaseURL}${this.dbPath}/${employee.key}.json`;
    const payload: IEmployee = {
      companyName: employee.companyName,
      companyKey: employee.companyKey,
      firstName: employee.firstName,
      lastName: employee.lastName,
      jobTitle: employee.jobTitle,
      isActive: employee.isActive,
    };
    return this.httpClient.patch(restfulDBPathWithQueries, payload).pipe(map(response => response as IEmployee));
  }
}
