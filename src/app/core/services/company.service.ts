import { Injectable } from '@angular/core';

import {
  Observable,
  of as observableOf
}                     from 'rxjs';

import { ApiService } from '../api/api.service';
import { Company }    from '../models/company';

@Injectable()
export class CompanyService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getCompanyList(): Observable<Company[]> {
    return this.apiService.company.getCompanyList();
  }

  public searchCompanyByName(companyName: string): Observable<Company[]> {
    const payload: string = companyName.charAt(0).toUpperCase() + companyName.slice(1);
    return this.apiService.company.searchCompanyByName(payload).valueChanges();
  }

  public searchCompanyByNameRestful(companyName: string): Observable<Company[] | null> {
    const payload: string = companyName.charAt(0).toUpperCase() + companyName.slice(1);
    return (companyName) ? this.apiService.company.searchCompanyByNameRestful(payload) : observableOf(null);
  }

  public updateCompanyList(company: Company): Observable<any> {
    return this.apiService.company.updateCompanyList(company);
  }
}
