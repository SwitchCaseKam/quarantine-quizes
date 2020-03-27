import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { F1GuessTracksService } from '../f1-guess-tracks.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit, OnDestroy {

  @Input()
  questionIndex: number;
  @Input()
  correctAnswer: string;
  @Input()
  questionImg: string;

  userAnswer: string;
  result = '';

  answerList: string[] = [
    'Australian Grand Prix,	Australia Melbourne Grand Prix, Circuit, Melbourne',
    'Bahrain Grand Prix,	Bahrain Bahrain International Circuit, Sakhir',
    'Chinese Grand Prix, China Shanghai International Circuit, Shanghai',
    'Azerbaijan Grand Prix,	Azerbaijan Baku City Circuit, Baku',
    'Spanish Grand Prix,	Spain Circuit de Barcelona-Catalunya, Montmeló',
    'Monaco Grand Prix,	Monaco Circuit de Monaco, Monte Carlo',
    'Canadian Grand Prix,	Canada Circuit Gilles Villeneuve, Montréal',
    'French Grand Prix,	France Circuit Paul Ricard, Le Castellet',
    'Austrian Grand Prix,	Austria Red Bull Ring, Spielberg',
    'British Grand Prix,	United Kingdom Silverstone Circuit, Silverstone',
    'German Grand Prix,	Germany Hockenheimring, Hockenheim',
    'Hungarian Grand Prix,	Hungary Hungaroring, Mogyoród',
    'Belgian Grand Prix,	Belgium Circuit de Spa-Francorchamps, Stavelot',
    'Italian Grand Prix,	Italy Autodromo Nazionale Monza, Monza',
    'Singapore Grand Prix,	Singapore Marina Bay Street Circuit, Singapore',
    'Russian Grand Prix,	Russia Sochi Autodrom, Sochi',
    'Japanese Grand Prix,	Japan Suzuka International Racing Course, Suzuka',
    'Mexican Grand Prix,	Mexico Autódromo Hermanos Rodríguez, Mexico City',
    'United States Grand Prix,	United States Circuit of the Americas, Austin, Texas',
    'Brazilian Grand Prix,	Brazil Autódromo José Carlos Pace, São Paulo',
    'Abu Dhabi Grand Prix,	United Arab Emirates Yas Marina Circuit, Abu Dhabi'
  ];


  constructor(private f1GuessTracksService: F1GuessTracksService) { }

  ngOnInit() {
    console.log('quiz-question component created');
  }

  public checkAnswer(): void {
    console.log('yourAnswer: ', this.userAnswer);
    console.log('correctAnswer: ', this.correctAnswer);
    this.f1GuessTracksService.validateAnswer(this.userAnswer, this.correctAnswer);
  }

  public onChange(userAnswer: string): void {
    console.log('selected event: ', userAnswer);
    this.userAnswer = userAnswer;
  }

  public ngOnDestroy() {
    console.log('onDestroy Quiz Question');
  }

}
