import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1GuessDriversService {

  private score = 0;
  private scoreSubject = new BehaviorSubject<number>(this.score);
  private userAnswers = [];
  private userAnswersSubject = new BehaviorSubject<string[]>(this.userAnswers);
  constructor() { }

  public getScores(): Observable<number> {
    return this.scoreSubject.asObservable();
  }
  private addPointToScores(): void {
    this.score = this.score + 1;
    this.scoreSubject.next(this.score);
  }

  public resetScores(): void {
    this.score = 0;
    this.scoreSubject.next(this.score);
  }
}
