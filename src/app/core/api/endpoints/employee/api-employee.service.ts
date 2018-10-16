import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
}                     from '@angular/fire/database';

import { Employee }   from 'src/app/core/models/employee';

@Injectable()
export class ApiEmployeeService {
  private dbPath: string = '/employees';

  constructor(
    private rtdb: AngularFireDatabase,
  ) { }

  public getEmployeesByCompanyKey(companyKey: string): AngularFireList<Employee> {
    return this.rtdb.list(this.dbPath, ref => ref
      .orderByChild('companyKey')
      .equalTo(`${companyKey}`));
  }
}
