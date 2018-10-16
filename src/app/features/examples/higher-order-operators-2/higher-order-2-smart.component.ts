import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
}                           from '@angular/core';

import {
  Observable,
  from,
  Subscription,
}                           from 'rxjs';
import {
  concatMap,
  mergeMap,
  map,
}                           from 'rxjs/operators';

import { CompanyService }   from 'src/app/core/services/company.service';
import {
  Company,
  pristineCompanyList,
}                           from 'src/app/core/models/company';
import { TableColumns }     from 'src/app/core/models/table-columns';
import { Utils }            from 'src/app/core/services/utils';

@Component({
  selector        : 'app-higher-order-2-smart',
  templateUrl     : './higher-order-2-smart.component.html',
  styleUrls       : ['./higher-order-2-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderOperators2SmartComponent implements OnInit, OnDestroy {
  public columnIdList: string[] = [];
  public companyList: Company[] = [];
  public companyList$: Observable<Company[]>;
  public displayedColumns: TableColumns[] = [
    {
      columnId: 'companyName',
      columnName: 'Company Name',
    },
    {
      columnId: 'address',
      columnName: 'Address',
    },
    {
      columnId: 'isSelected',
      columnName: 'Selected',
    },
  ];

  private subscriptions: Subscription[] = [];

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    this.getCompanyList();
    this.columnIdList = Utils.filterTableColumns(this.displayedColumns);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public getCompanyList(): void {
    this.companyList$ = this.companyService.getCompanyList().pipe(
      map(response => {
        this.companyList = response;
        return response;
      }),
    );
  }

  public updateCompanyConcat(): void {
    const concatMapControlSubscription: Subscription = from(this.companyList)
      .pipe(concatMap(company => {
        const payload = { ...company };
        payload.isSelected = !(payload.isSelected);
        return this.companyService.updateCompanyList(payload);
      }))
      .subscribe();
    this.subscriptions.push(concatMapControlSubscription);
  }

  public updateCompanyMerge(): void {
    const mergeMapControlSubscription: Subscription = from(this.companyList)
      .pipe(mergeMap(company => {
        const payload = { ...company };
        (payload.color === 'red') ? payload.color = 'blue' : payload.color = 'red';
        return this.companyService.updateCompanyList(payload);
      }))
      .subscribe();
    this.subscriptions.push(mergeMapControlSubscription);
  }

  public resetCompanyNames(): void {
    const companyNamesSubscription: Subscription = from(pristineCompanyList)
      .pipe(mergeMap(company => this.companyService.updateCompanyList(company)))
      .subscribe();
    this.subscriptions.push(companyNamesSubscription);
  }
}
