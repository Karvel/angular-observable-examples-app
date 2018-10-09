import { Injectable } from '@angular/core';
import {
  Observable,
  interval,
}                     from 'rxjs';
import { map, take }  from 'rxjs/operators';

@Injectable()
export class OperatorsService {
  public getExample$(exampleList: string[], intervalTime: number): Observable<string> {
    return interval(intervalTime).pipe(
      map(index => exampleList[index]),
      take(exampleList.length),
    );
  }

  public getColor(example: string): Observable<string> {
    return interval(1500).pipe(
      map(val => this.printMessage(example, val)),
      take(4),
    );
  }

  private printMessage(exampleString: string , val: number): string {
    return `${exampleString} #${val + 1}`;
  }
}
