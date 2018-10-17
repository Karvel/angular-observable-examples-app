import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireAction,
  DatabaseSnapshot,
}                      from '@angular/fire/database';

import { Observable }  from 'rxjs';
import { map }         from 'rxjs/operators';

import { Employee }    from 'src/app/core/models/employee';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiEmployeeService {
  private dbPath: string = '/employees';
  public employeeRef: AngularFireList<Employee> = null;

  constructor(
    private httpClient: HttpClient,
    private rtdb: AngularFireDatabase,
  ) {
    this.employeeRef = rtdb.list(this.dbPath);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.employeeRef.snapshotChanges().pipe(
      map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() }))),
    );
  }

  public getEmployeesByCompanyKey(companyKey: string): Observable<Employee[]> {
    return this.rtdb.list(this.dbPath, ref => ref
      .orderByChild('companyKey')
      .equalTo(`${companyKey}`))
      .snapshotChanges().pipe(
        map((employee: AngularFireAction<DatabaseSnapshot<Employee>>[]) => employee),
        map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() }))),
      );
  }

  public updateEmployeeList(employee: Employee): Observable<Employee> {
    const restfulDBPathWithQueries = `${environment.firebase.databaseURL}${this.dbPath}/${employee.key}.json`;
    const payload: Employee = {
      companyName: employee.companyName,
      companyKey: employee.companyKey,
      firstName: employee.firstName,
      lastName: employee.lastName,
      jobTitle: employee.jobTitle,
      isFoo: employee.isFoo,
    };
    return this.httpClient.patch(restfulDBPathWithQueries, payload).pipe(map((response: Employee) => response));
  }
}
