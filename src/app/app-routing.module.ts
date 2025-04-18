import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatComponent } from './quiz/resultat/resultat.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategorieComponent } from './quiz/categorie/categorie.component';

const routes: Routes = [
  {path :'', component: HomeComponent},
  {path : 'quiz/:id', component: QuizComponent},
  {path : 'result', component: ResultatComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'categories/:playerName', component: CategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
