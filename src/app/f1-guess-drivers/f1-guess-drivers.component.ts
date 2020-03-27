import { Component, OnInit } from '@angular/core';
import { CommonQuizService } from '../services/common-quiz.service';
import { F1GuessDriversService } from './f1-guess-drivers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-f1-guess-drivers',
  templateUrl: './f1-guess-drivers.component.html',
  styleUrls: ['./f1-guess-drivers.component.css']
})
export class F1GuessDriversComponent implements OnInit {

  public userName: string;
  private userNameSubscription: Subscription;
  constructor(
    private guessTracksService: F1GuessDriversService,
    private commonQuizService: CommonQuizService) { }

  public ngOnInit() {
    console.log('ngOnInit: f1 guess drivers');
    this.userNameSubscription = this.commonQuizService.getUserName().subscribe(
      (userName: string) => this.userName = userName
    );
  }

  public reset(): void {
    this.guessTracksService.resetScores();
  }



}
