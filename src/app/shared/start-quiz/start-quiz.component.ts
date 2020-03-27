import { Component, OnInit, Input } from '@angular/core';
import { CommonQuizService } from 'src/app/services/common-quiz.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  @Input()
  quizCategory = 'None';
  @Input()
  quizName: string;
  @Input()
  quizDescription: string;

  username: string;

  constructor(private commonQuizService: CommonQuizService) { }

  ngOnInit() {
  }

  public startQuiz(event): void {
    console.log(event)
    this.username = event;
    this.commonQuizService.setUserName(this.username);
  }
}
