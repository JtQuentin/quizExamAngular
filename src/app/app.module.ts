import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './quiz/question/question.component';
import { ReponseComponent } from './quiz/reponse/reponse.component';
import { ResultatComponent } from './quiz/resultat/resultat.component';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TimeFormatPipe } from './quiz/timer/time-format.pipe';
import { LettreReponseDirective } from './quiz/reponse/lettre-reponse.directive';
import { ConfirmpopupComponent } from './quiz/confirmpopup/confirmpopup.component';
import { CategorieComponent } from './quiz/categorie/categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    QuestionComponent,
    ReponseComponent,
    ResultatComponent,
    LoginComponent,
    RegisterComponent,
    TimeFormatPipe,
    LettreReponseDirective,
    ConfirmpopupComponent,
    CategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
