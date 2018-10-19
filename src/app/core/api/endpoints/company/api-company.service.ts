import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireAction,
  DatabaseSnapshot,
}                      from '@angular/fire/database';

import { Observable }  from 'rxjs';

import { ICompany }    from 'src/app/core/models/company';
import { CONSTANTS }   from 'src/app/core/utils/constants';
import { environment } from 'src/environments/environment';
import { map }         from 'rxjs/operators';
import { Utils }       from 'src/app/core/services/utils';

@Injectable()
export class ApiCompanyService {
  public companyRef: AngularFireList<ICompany> = null;

  private dbPath: string = '/company';
  private dbPath2: string = '/company2';
  private restfulDB: string = `${environment.firebase.databaseURL}${this.dbPath}.json`;

  constructor(
    private httpClient: HttpClient,
    private rtdb: AngularFireDatabase,
  ) {
    this.companyRef = rtdb.list(this.dbPath2);
  }

  public addCompany(company: ICompany): void {
    this.companyRef.push(company);
  }

  public getCompanyList(): Observable<ICompany[]> {
    return this.companyRef.snapshotChanges().pipe(
      map(changes => changes.map(change => ({ key: change.payload.key, ...change.payload.val() }))),
    );
  }

  public getCompanyByID(key: string): Observable<ICompany> {
    const itemPath =  `${this.dbPath2}/${key}`;

    return this.rtdb.object(itemPath).snapshotChanges().pipe(
      map((company: AngularFireAction<DatabaseSnapshot<ICompany>>) => company),
      map(change => ({ key: change.payload.key, ...change.payload.val() })),
    );
  }

  public searchCompanyByName(companyName: string): AngularFireList<ICompany> {
    return this.rtdb.list(this.dbPath, ref => ref
      .orderByChild('companyName')
      .startAt(companyName)
      .endAt(`${companyName}${CONSTANTS.terminatingCharacter}`));
  }

  public searchCompanyByNameRestful(companyName: string): Observable<ICompany[]> {
    const path = `${this.restfulDB}?orderBy="companyName"&startAt="${companyName}"&endAt="${companyName}${CONSTANTS.terminatingCharacter}"`;
    return this.httpClient.get(path).pipe(
      map(response => Utils.convertFirebaseResponseToArray(response)),
      map((response: ICompany[]) => response),
    );
  }

  public updateCompany(company: ICompany): Observable<ICompany> {
    const restfulDBPathWithQueries = `${environment.firebase.databaseURL}${this.dbPath2}/${company.key}.json`;
    const payload: ICompany = {
      companyName: company.companyName,
      address: company.address,
      isSelected: company.isSelected,
      color: company.color,
      employeeCount: company.employeeCount,
    };
    return this.httpClient.patch(restfulDBPathWithQueries, payload).pipe(map((response: ICompany) => response));
  }
}
