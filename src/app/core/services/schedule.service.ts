import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators';

import { ApiService } from '../api/api.service';

@Injectable()
export class ScheduleService {
  constructor(
    private apiService: ApiService,
  ) { }

  public getSchedule(): Observable<any> {
    return this.apiService.schedule.getSchedule()
      .valueChanges()
      .pipe(map((response) => response));
  }

  public addScheduleItem(event): any {
    return this.apiService.schedule.addScheduleItem(event);
  }
}
