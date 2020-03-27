import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizTableComponent } from './quiz-table/quiz-table.component';
import { QuizesComponent } from './quizes/quizes.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { F1GuessTracksComponent } from './f1-guess-tracks/f1-guess-tracks.component';
import { StartQuizComponent } from './shared/start-quiz/start-quiz.component';
import { QuizResultsComponent } from './shared/quiz-results/quiz-results.component';
import { QuizQuestionComponent } from './f1-guess-tracks/quiz-question/quiz-question.component';
import { FormsModule } from '@angular/forms';

import {MatStepperModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { QuizAnswersComponent } from './f1-guess-tracks/quiz-answers/quiz-answers.component';
import { F1GuessDriversComponent } from './f1-guess-drivers/f1-guess-drivers.component';
import { TeamsDriversTableComponent } from './f1-guess-drivers/teams-drivers-table/teams-drivers-table.component';
import { DriverInputComponent } from './f1-guess-drivers/driver-input/driver-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizItemComponent,
    QuizTableComponent,
    QuizesComponent,
    HomeComponent,
    routingComponents,
    F1GuessTracksComponent,
    StartQuizComponent,
    QuizResultsComponent,
    QuizQuestionComponent,
    QuizAnswersComponent,
    F1GuessDriversComponent,
    TeamsDriversTableComponent,
    DriverInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
