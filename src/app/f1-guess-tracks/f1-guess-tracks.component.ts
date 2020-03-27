import { Component, OnInit, OnDestroy, OnChanges, ViewChild, AfterViewInit, Output } from '@angular/core';
import { F1GuessTracksService } from './f1-guess-tracks.service';
import { Subscription } from 'rxjs';
import { TrackInfo } from './f1-guess-tracks.model';
import { CommonQuizService } from '../services/common-quiz.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-f1-guess-tracks',
  templateUrl: './f1-guess-tracks.component.html',
  styleUrls: ['./f1-guess-tracks.component.css']
})
export class F1GuessTracksComponent implements OnInit, OnDestroy {
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  @Output()
  selectedIndex: number;

  public tracks: Map<string, TrackInfo>;
  public tracksNames: string[];
  public isLinear = true;
  public userName: string;
  public score: number;
  public userAnswers: string[];
  private userNameSubscription: Subscription;
  private scoreSubscription: Subscription;
  private userAnswersSubscription: Subscription;

  constructor(
    private guessTracksService: F1GuessTracksService,
    private commonQuizService: CommonQuizService) { }

//   ngAfterViewInit() {
//       this.stepper.selectedIndex = 1;
//   }

//   changeStep(index: number) {
//     console.log(index);
//     this.stepper.selectedIndex = index;
// }

  public ngOnInit() {
    console.log('ngOnInit: f1 guess tracks');
    this.tracks = this.guessTracksService.createTracksInformation();
    this.tracksNames = Array.from(this.shuffle(Array.from(this.tracks.keys())));
    this.userNameSubscription = this.commonQuizService.getUserName().subscribe(
      (userName: string) => this.userName = userName
    );
    this.scoreSubscription = this.guessTracksService.getScores().subscribe(
      (score: number) => this.score = score
    );

    this.userAnswersSubscription = this.guessTracksService.getUserAnswers().subscribe(
      (userAnswers: string[]) => this.userAnswers = userAnswers
    )
  }

  public ngOnDestroy() {
    this.userNameSubscription.unsubscribe();
    this.scoreSubscription.unsubscribe();
  }

  private shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public getTracksNames(): string[] {
    return this.tracksNames;
  }

  public reset(): void {
    this.guessTracksService.resetScores();
  }


}
