import { Injectable } from '@angular/core';
import { TrackInfo } from './f1-guess-tracks.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1GuessTracksService {

  private score = 0;
  private scoreSubject = new BehaviorSubject<number>(this.score);
  private userAnswers = [];
  private userAnswersSubject = new BehaviorSubject<string[]>(this.userAnswers);

  // public tracksInfoMap = new BehaviorSubject<Map<string, TrackInfo>>(this.createTracksInformation());
  private tracks: string[] = [
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

  constructor() {}

  public createTracksInformation(): Map<string, TrackInfo> {
    const tracksInfoMap = new Map<string, TrackInfo>();
    tracksInfoMap.set('Australia', new TrackInfo('Australian Grand Prix',
    'Australian Grand Prix,	Australia Melbourne Grand Prix, Circuit, Melbourne',
    'https://www.clipartmax.com/png/small/349-3498670_melbourne-grand-prix-circuit-2018-australian-grand-albert-park-f1-track-outline.png',
    ));
    tracksInfoMap.set('Bahrain', new TrackInfo('Bahrain Grand Prix',
    'Bahrain Grand Prix, Bahrain Bahrain International Circuit, Sakhir	',
    'https://www.clipartmax.com/png/small/126-1261457_medium-image-bahrain-international-circuit-png.png'
    ));
    tracksInfoMap.set('China', new TrackInfo('Chinese Grand Prix',
    'Chinese Grand Prix,	China Shanghai International Circuit, Shanghai',
    'https://www.clipartmax.com/png/small/464-4645939_chinese-png-china-f1-2019.png'
    ));
    tracksInfoMap.set('Azerbaijan', new TrackInfo('Azerbaijan Grand Prix',
    'Azerbaijan Grand Prix,	Azerbaijan Baku City Circuit, Baku',
    'https://www.clipartmax.com/png/small/317-3177676_baku-city-circuit-azerbaijan-grand-prix-formula-1-race-baku-city-circuit.png'
    ));
    tracksInfoMap.set('Spain', new TrackInfo('Spanish Grand Prix',
    'Spanish Grand Prix,	Spain Circuit de Barcelona-Catalunya, Montmeló',
    'https://www.clipartmax.com/png/small/336-3364632_circuit-de-barcelona-catalunya-el-circuit-restaurant-barcelona-f1-circuit-map.png'
    ));
    tracksInfoMap.set('Monaco', new TrackInfo('Monaco Grand Prix',
    'Monaco Grand Prix,	Monaco Circuit de Monaco, Monte Carlo',
    'https://www.clipartmax.com/png/small/336-3364670_circuit-de-monaco-2018-fia-formula-one-world-championship-f1-circuits-2018.png',
    ));
    // need to add Canadian
    tracksInfoMap.set('France', new TrackInfo('French Grand Prix',
    'French Grand Prix,	France Circuit Paul Ricard, Le Castellet',
    'https://www.clipartmax.com/png/small/327-3278226_circuit-paul-ricard-2018-fia-formula-one-world-championship-paul-ricard-circuit.png'
    ));
    // need to add Austrian
    // need to add British
    tracksInfoMap.set('Germany', new TrackInfo('German Grand Prix',
    'German Grand Prix,	Germany Hockenheimring, Hockenheim',
    'https://www.clipartmax.com/png/small/327-3278240_hockenheimring-german-grand-prix-race-track-auto-racing-hockenheimring-layout.png'
    ));
    tracksInfoMap.set('Hungary', new TrackInfo('Hungarian Grand Prix',
    'Hungarian Grand Prix, Hungary Hungaroring, Mogyoród',
    'https://www.clipartmax.com/png/small/322-3225559_image-not-found-or-type-unknown-hungaroring-2018-f1-circuit.png'
    ));
    // need to add Belgium
    // need to add Italy
    tracksInfoMap.set('Singapore', new TrackInfo('Singapore Grand Prix',
    'Singapore Grand Prix,	Singapore Marina Bay Street Circuit, Singapore',
    'https://www.clipartmax.com/png/small/69-693621_f1-circuits-2014-2018-f1-tracks-black-and-white.png'
    ));
    tracksInfoMap.set('Russia', new TrackInfo('Russian Grand Prix',
    'Russian Grand Prix,	Russia Sochi Autodrom, Sochi',
    'https://www.clipartmax.com/png/small/327-3278232_race-track-auto-racing-kart-racing-formula-sochi-circuit-png.png'
    ));
    tracksInfoMap.set('Japan', new TrackInfo('Japanese Grand Prix',
    'Japanese Grand Prix,	Japan Suzuka International Racing Course, Suzuka',
    'https://www.clipartmax.com/png/small/327-3278232_race-track-auto-racing-kart-racing-formula-sochi-circuit-png.png'
    ));
    // need to add Mexico
    tracksInfoMap.set('USA', new TrackInfo('United States Grand Prix',
    'United States Grand Prix,	United States Circuit of the Americas, Austin, Texas',
    'https://www.clipartmax.com/png/small/349-3498685_circuit-of-the-americas-2018-fia-formula-one-world-circuits-f1-de.png'
    ));
    // need to add Brazil
    tracksInfoMap.set('UEA', new TrackInfo('Abu Dhabi Grand Prix',
    'Abu Dhabi Grand Prix,	United Arab Emirates Yas Marina Circuit, Abu Dhabi',
    'https://www.clipartmax.com/png/small/365-3654838_yas-marina-circuit-formula-1-abu-dhabi-grand-prix-electronic-yas-marina.png'
    ));
    return tracksInfoMap;
  }

  // public getTracksInfo(): Observable<Map<string, TrackInfo>> {
  //   return this.tracksInfoMap.asObservable();
  // }

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

  public addUserAnswer(userAnswer: string): void {
    this.userAnswers.push(userAnswer);
    this.userAnswersSubject.next(this.userAnswers);
  }

  public getUserAnswers(): Observable<string[]> {
    return this.userAnswersSubject.asObservable();
  }

  public validateAnswer(userAnswer: string, correctAnswer: string): void {
    this.addUserAnswer(userAnswer);
    if (userAnswer.toLowerCase().replace(/\s/g, '') === correctAnswer.toLowerCase().replace(/\s/g, '')) {
      console.log('Correct Answer');
      this.addPointToScores();
    } else {
      console.log('Wrong Answer!');
    }
  }

}
