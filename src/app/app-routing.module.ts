
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesComponent } from './quizes/quizes.component';
import { HomeComponent } from './home/home.component';
import { F1GuessTracksComponent } from './f1-guess-tracks/f1-guess-tracks.component';
import { F1GuessDriversComponent } from './f1-guess-drivers/f1-guess-drivers.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'quizes', component: QuizesComponent },
  { path: 'quizes/f1-guess-tracks', component: F1GuessTracksComponent },
  { path: 'quizes/f1-guess-drivers', component: F1GuessDriversComponent },
  { path: '**', component: QuizesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, QuizesComponent, F1GuessTracksComponent, F1GuessDriversComponent];
