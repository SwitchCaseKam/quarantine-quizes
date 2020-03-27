import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent implements OnInit {

  @Input()
  quizCategory = 'None';
  @Input()
  quizName: string;
  @Input()
  quizDescription: string;
  @Input()
  date: string;
  @Input()
  quizPath: string;

  constructor() { }

  ngOnInit() {
  }

}
