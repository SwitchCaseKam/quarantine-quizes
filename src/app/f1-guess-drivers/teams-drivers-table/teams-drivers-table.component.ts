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

  driversTeamsMap = new Map<string, string[]>();
  // {
  //   'Renault F1 Team': ['Daniel Ricciardo', 'Nico Hulkenberg'],
  //   'McLaren F1 Team': ['Lando Norris', ' Carlos Sainz'],
  //   'Scuderia Ferrari': ['Sebastian Vettel', 'Charles Leclerc'],
  //   'Alfa Romeo Racing': ['Kimi Räikkönen', 'Antonio Giovinazzi'],
  //   'Haas F1 Team': ['Romain Grosjean', 'Kevin Magnussen'],
  //   'Red Bull Toro Rosso Honda': ['Pierre Gasly', 'Daniił Kwiat'],
  //   'Aston Martin Red Bull Racing': ['Alexander Albon', 'Max Verstappen'],
  //   'SportPesa Racing Point F1 Team': ['Sergio Perez', 'Lance Stroll'],
  //   'Mercedes-AMG Petronas Motorsport':['Lewis Hamilton', 'Valtteri Bottas'],
  //   'ROKiT Williams Racing': ['George Russell', 'Robert Kubica']
  //   };

  constructor() { }

  ngOnInit() {
    this.driversTeamsMap.set('Renault F1 Team', ['Daniel Ricciardo', 'Nico Hulkenberg']);
    this.driversTeamsMap.set('McLaren F1 Team', ['Lando Norris', 'Carlos Sainz']);
    this.driversTeamsMap.set('Scuderia Ferrari', ['Sebastian Vettel', 'Charles Leclerc']);
    this.driversTeamsMap.set('Alfa Romeo Racing', ['Kimi Räikkönen', 'Antonio Giovinazzi']);
    this.driversTeamsMap.set('Haas F1 Team', ['Romain Grosjean', 'Kevin Magnussen']);
    this.driversTeamsMap.set('Red Bull Toro Rosso Honda', ['Pierre Gasly', 'Daniił Kwiat']);
    this.driversTeamsMap.set('SportPesa Racing Point F1 Team', ['Sergio Perez', 'Lance Stroll']);
    this.driversTeamsMap.set('Mercedes-AMG Petronas Motorsport', ['Lewis Hamilton', 'Valtteri Bottas']);
    this.driversTeamsMap.set('ROKiT Williams Racing', ['George Russell', 'Robert Kubica']);
    this.driversTeamsMap.set('Aston Martin Red Bull Racing', ['Alexander Albon', 'Max Verstappen']);
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
