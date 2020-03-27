import { Component, OnInit, Input } from '@angular/core';
import { TrackInfo } from '../f1-guess-tracks.model';
import { F1GuessTracksService } from '../f1-guess-tracks.service';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  @Input()
  tracksAnswer: Map<string, TrackInfo>;
  @Input()
  tracksNamesAnswer;

  userAnswers;

  constructor(private guessTracksService: F1GuessTracksService) { }

  ngOnInit() {
    console.log(typeof this.tracksAnswer);
    this.tracksAnswer = this.guessTracksService.createTracksInformation();
    this.tracksNamesAnswer = Array.from(this.tracksNamesAnswer.split(','));
    this.guessTracksService.getUserAnswers().subscribe(
      (answers: string[]) => this.userAnswers = answers
    );
  }

}
