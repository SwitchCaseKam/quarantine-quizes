import { Component, OnInit, Input } from '@angular/core';
import { F1GuessDriversService } from '../f1-guess-drivers.service';

@Component({
  selector: 'app-teams-drivers-table',
  templateUrl: './teams-drivers-table.component.html',
  styleUrls: ['./teams-drivers-table.component.css']
})
export class TeamsDriversTableComponent implements OnInit {

  @Input()
  teams: string[];

  constructor() { }

  ngOnInit() {
    this.teams = this.shuffle(this.teams);
  }

  private shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
