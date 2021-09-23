import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private initialMessage = '0-0';

  private message$ = new BehaviorSubject<string>(this.initialMessage);
  constructor() {}

  public setMessage(message: string): void {
    this.message$.next(message);
  }

  public getMessage$(): Observable<string> {
    return this.message$.asObservable();
  }
}
