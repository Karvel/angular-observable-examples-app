import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
}                     from '@angular/fire/database';

@Injectable()
export class ApiScheduleService {
  public scheduleRef: AngularFireList<string> = null;

  private dbPath: string = '/schedule';

  constructor(
    private rtdb: AngularFireDatabase,
  ) {
    this.scheduleRef = rtdb.list(this.dbPath);
  }

  public getSchedule(): AngularFireList<string> {
    return this.scheduleRef;
  }

  public getScheduleByID(key: string): AngularFireObject<string> {
    const itemPath =  `${this.dbPath}/${key}`;

    return this.rtdb.object(itemPath);
  }

  public addScheduleItem(event): void {
    this.scheduleRef.push(event);
  }
}
