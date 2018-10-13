import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
}                           from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
}                           from '@angular/forms';

import {
  Observable,
  forkJoin,
  from,
  combineLatest,
  Subscription,
}                           from 'rxjs';
import {
  concatMap,
  debounceTime,
  exhaustMap,
  mergeMap,
  pairwise,
  switchMap,
  tap,
}                           from 'rxjs/operators';

import { CompanyService }   from 'src/app/core/services/company.service';
import {
  Company,
  pristineCompanyList,
}                           from 'src/app/core/models/company';
import { OperatorsService } from '../../../core/services/operators.service';

@Component({
  selector        : 'app-higher-order-observables-smart',
  templateUrl     : './higher-order-observables-smart.component.html',
  styleUrls       : ['./higher-order-observables-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderObservablesSmartComponent implements OnInit, OnDestroy {
  public companyList: Company[] = [];
  public companyListSwitch$: Observable<Company[]>;
  public colorList$: Observable<string>;
  public companyListExhaust$: Observable<Company[]>;
  public form: FormGroup;
  public numberList$: Observable<string>;

  private subscriptions: Subscription[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private operatorsService: OperatorsService,
  ) {
    this.initializeStreams();
    this.buildForm();
    this.initializeFormSubscriptions();
  }

  ngOnInit(): void {
    this.getCompany();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public getCompany(): void {
    const getCompany$: Subscription = this.companyService.getCompany().subscribe(response => {
      this.companyList = response;
      this.cd.detectChanges();
    });
    this.subscriptions.push(getCompany$);
  }

  public getForkJoin(): void {
    console.log('~~~getForkJoin~~~');
    const forkJoinExample$: Subscription = forkJoin(this.colorList$, this.numberList$)
      .subscribe(result => console.log('forkJoin result', result));
    this.subscriptions.push(forkJoinExample$);
  }

  public getCombineLatest(): void {
    console.log('~~~getCombineLatest~~~');
    const combineLatestExample$: Subscription = combineLatest(this.colorList$, this.numberList$)
      .subscribe(result => console.log('combineLatest result', result));
    this.subscriptions.push(combineLatestExample$);
  }

  public getPairwise(): void {
    console.log('~~~getPairwise~~~');
    const pairwiseExample$: Subscription = this.colorList$
      .pipe(pairwise())
      .subscribe(result => console.log('pairwise result', result));
    this.subscriptions.push(pairwiseExample$);
  }

  public getConcatMap(): void {
    console.log('~~~getConcatMap~~~');
    const concatMapExample$: Subscription = this.colorList$
      .pipe(concatMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('concatMap result', result));
    this.subscriptions.push(concatMapExample$);
  }

  public getMergeMap(): void {
    console.log('~~~getMergeMap~~~');
    const mergeMapExample$: Subscription = this.colorList$
      .pipe(mergeMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('mergeMap result', result));
    this.subscriptions.push(mergeMapExample$);
  }

  public getSwitchMap(): void {
    console.log('~~~getSwitchMap~~~');
    const switchMapExample$: Subscription = this.colorList$
      .pipe(switchMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('switchMap result', result));
    this.subscriptions.push(switchMapExample$);
  }

  public getExhaustMap(): void {
    console.log('~~~getExhaustMap~~~');
    const exhaustMapExample$: Subscription = this.colorList$
      .pipe(exhaustMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('exhaustMap result', result));
    this.subscriptions.push(exhaustMapExample$);
  }

  public updateCompanyConcat(): void {
    const concatMapControlSubscription: Subscription = from(this.companyList)
      .pipe(concatMap(company => {
        const payload = { ...company };
        payload.isSelected = true;
        return this.companyService.updateCompanyList(payload);
      }))
      .subscribe();
    this.subscriptions.push(concatMapControlSubscription);
  }

  public updateCompanyMerge(): void {
    const mergeMapControlSubscription: Subscription = from(this.companyList)
      .pipe(mergeMap(company => {
        const payload = { ...company };
        payload.companyName = payload.companyName + ' foo';
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

  private initializeStreams(): void {
    this.colorList$ = this.operatorsService.getExample$(['Red', 'Blue', 'Green'], 3000).pipe(
      tap(response => console.log(`~~~ ${response} ~~~`)),
    );
    this.numberList$ = this.operatorsService.getExample$(['One', 'Two', 'Three'], 4000).pipe(
      tap(response => console.log(`~~~ ${response} ~~~`)),
    );
  }

  private buildForm(): void {
    this.form = this.fb.group({
      switchMap: '',
      exhaustMap: '',
    });
  }

  private get switchMapControl(): AbstractControl {
    return this.form.get('switchMap');
  }

  private get exhaustMapControl(): AbstractControl {
    return this.form.get('exhaustMap');
  }

  private initializeFormSubscriptions(): void {
    this.companyListExhaust$ = this.exhaustMapControl.valueChanges
      .pipe(
        debounceTime(1000),
        exhaustMap((input: string) => this.companyService.searchCompanyByNameRestful(input)),
      );
    this.companyListSwitch$ = this.switchMapControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((input: string) => this.companyService.searchCompanyByNameRestful(input)),
      );
  }
}
