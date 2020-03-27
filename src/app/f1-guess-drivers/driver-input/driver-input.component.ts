import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driver-input',
  templateUrl: './driver-input.component.html',
  styleUrls: ['./driver-input.component.css']
})
export class DriverInputComponent implements OnInit {

  @Input()
  id: string;
  @Input()
  correctAnswers: string[];

  currentAnswer: string;

  constructor() { }

  ngOnInit() {
    this.id = this.id.replace(/\s/g, '').toLowerCase();
  }

  public checkAnswer(answer: string, id: string): void {
    for (let driver of this.correctAnswers) {
      console.log(`check ${answer} with ${driver}` );
      const driverSurname = driver.split(' ')[1].toLowerCase();
      if (answer.toLowerCase().includes(driverSurname)) {
        this.correctAnswers =  this.correctAnswers.filter(dr => dr !== driver);
        const el = document.querySelector('#' + id);
        el.setAttribute('style', 'border-color: green');
        el['value'] = driver;
        el.setAttribute('disabled', 'true');
        break;
      } else {
        const el = document.querySelector('#' + id);
        el.setAttribute('style', 'border-color: red');
      }
    }
  }
}
