import { Injectable }          from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable }          from 'rxjs';

@Injectable()
export class ApiScheduleService {

  constructor(
    private rtdb: AngularFireDatabase,
  ) { }

  public getSchedule(): Observable<Object> {
    return this.rtdb.list('schedule').valueChanges();
  }

  public addScheduleItem(event): firebase.database.ThenableReference {
    return this.rtdb.list(`schedule`).push(event);
  }
}
