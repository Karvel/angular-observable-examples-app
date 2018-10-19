import { Injectable } from '@angular/core';

import {
  Observable,
  of as observableOf
}                     from 'rxjs';

import { ApiService } from '../api/api.service';
import { ICompany }   from '../models/company';

@Injectable()
export class CompanyService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getCompanyList(): Observable<ICompany[]> {
    return this.apiService.company.getCompanyList();
  }

  public getCompanyByID(key: string): Observable<ICompany> {
    return this.apiService.company.getCompanyByID(key);
  }

  public searchCompanyByName(companyName: string): Observable<ICompany[]> {
    const payload: string = companyName.charAt(0).toUpperCase() + companyName.slice(1);
    return this.apiService.company.searchCompanyByName(payload).valueChanges();
  }

  public searchCompanyByNameRestful(companyName: string): Observable<ICompany[] | null> {
    const payload: string = companyName.charAt(0).toUpperCase() + companyName.slice(1);
    return (companyName) ? this.apiService.company.searchCompanyByNameRestful(payload) : observableOf(null);
  }

  public updateCompany(company: ICompany): Observable<ICompany> {
    return this.apiService.company.updateCompany(company);
  }
}
