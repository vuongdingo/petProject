import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'platform' })

export class ShareCountService {

  public countData: BehaviorSubject<number>;

  constructor() {
    this.countData = new BehaviorSubject(0);
  }
}
