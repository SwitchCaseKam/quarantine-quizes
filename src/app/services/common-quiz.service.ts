import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonQuizService {

  private userName = new Subject<string>();

  constructor() { }

  public setUserName(userName: string) {
    this.userName.next(userName);
  }

  public getUserName(): Observable<string> {
    return this.userName.asObservable();
  }
}
