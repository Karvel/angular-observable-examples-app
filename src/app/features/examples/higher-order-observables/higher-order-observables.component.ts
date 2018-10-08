import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
}                       from '@angular/core';

import {
  Observable,
  forkJoin,
  combineLatest,
  Subscription,
}                       from 'rxjs';
import {
  concatMap,
  exhaustMap,
  mergeMap,
  pairwise,
  switchMap,
  tap,
}                       from 'rxjs/operators';

import { OperatorsService } from '../../../core/services/operators.service';

@Component({
  selector        : 'app-higher-order-observables',
  templateUrl     : './higher-order-observables.component.html',
  styleUrls       : ['./higher-order-observables.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class HigherOrderObservablesComponent implements OnDestroy {
  public colorList$: Observable<string>;
  public numberList$: Observable<string>;

  private subscriptions: Subscription[] = [];

  constructor(
    private operatorsService: OperatorsService,
  ) {
    this.initializeStreams();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public getConcatMap(): void {
    console.log('~~~getConcatMap~~~');
    const concatMapExample$ = this.colorList$
      .pipe(concatMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('concatMap result', result));
    this.subscriptions.push(concatMapExample$);
  }

  public getMergeMap(): void {
    console.log('~~~getMergeMap~~~');
    const mergeMapExample$ = this.colorList$
      .pipe(mergeMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('mergeMap result', result));
    this.subscriptions.push(mergeMapExample$);
  }

  public getSwitchMap(): void {
    console.log('~~~getSwitchMap~~~');
    const switchMapExample$ = this.colorList$
      .pipe(switchMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('switchMap result', result));
    this.subscriptions.push(switchMapExample$);
  }

  public getExhaustMap(): void {
    console.log('~~~getExhaustMap~~~');
    const exhaustMapExample$ = this.colorList$
      .pipe(exhaustMap(example => this.operatorsService.getColor(example)))
      .subscribe(result => console.log('exhaustMap result', result));
    this.subscriptions.push(exhaustMapExample$);
  }

  public getPairwise(): void {
    console.log('~~~getPairwise~~~');
    const pairwiseExample$ = this.colorList$
      .pipe(pairwise())
      .subscribe(result => console.log('pairwise result', result));
    this.subscriptions.push(pairwiseExample$);
  }

  public getCombineLatest(): void {
    console.log('~~~getCombineLatest~~~');
    const combineLatestExample$ = combineLatest(this.colorList$, this.numberList$)
      .subscribe(result => console.log('combineLatest result', result));
    this.subscriptions.push(combineLatestExample$);
  }

  public getForkJoin(): void {
    console.log('~~~getForkJoin~~~');
    const forkJoinExample$ = forkJoin(this.colorList$, this.numberList$)
      .subscribe(result => console.log('forkJoin result', result));
    this.subscriptions.push(forkJoinExample$);
  }

  private initializeStreams(): void {
    this.colorList$ = this.operatorsService.getExample$(['Red', 'Blue', 'Green'], 3000).pipe(
      tap(response => console.log(`~~~ ${response} ~~~`)),
    );
    this.numberList$ = this.operatorsService.getExample$(['One', 'Two', 'Three'], 4000).pipe(
      tap(response => console.log(`~~~ ${response} ~~~`)),
    );
  }
}
