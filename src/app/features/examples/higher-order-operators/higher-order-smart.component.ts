import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
}                           from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
}                           from '@angular/forms';

import {
  Observable,
  forkJoin,
  combineLatest,
  Subscription,
}                           from 'rxjs';
import {
  concatMap,
  debounceTime,
  exhaustMap,
  mergeMap,
  switchMap,
  tap,
}                           from 'rxjs/operators';

import { ICompany }         from 'src/app/core/models/company';
import { CompanyService }   from 'src/app/core/services/company.service';
import { OperatorsService } from '../../../core/services/operators.service';

@Component({
  selector        : 'app-higher-order-smart',
  templateUrl     : './higher-order-smart.component.html',
  styleUrls       : ['./higher-order-smart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderOperatorsSmartComponent implements OnInit, OnDestroy {
  public companyListSwitch$: Observable<ICompany[] | null>;
  public colorList$: Observable<string>;
  public companyListExhaust$: Observable<ICompany[] | null>;
  public form: FormGroup;
  public numberList$: Observable<string>;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private operatorsService: OperatorsService,
  ) { }

  ngOnInit(): void {
    this.initializeStreams();
    this.buildForm();
    this.initializeFormSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
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

  private initializeStreams(): void {
    this.colorList$ = this.operatorsService.getExample$(['Red', 'Blue', 'Green'], 3000).pipe(
      tap(response => console.log(`~~~ ${response} ~~~`)),
    );
    this.numberList$ = this.operatorsService.getExample$(['1', '2', '3'], 4000).pipe(
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
    return this.form.get('switchMap') as AbstractControl;
  }

  private get exhaustMapControl(): AbstractControl {
    return this.form.get('exhaustMap') as AbstractControl;
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
