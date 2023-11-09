import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/quiz-service.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit{ 
  resultat = 0;
  resultatTotal = this.quizService.questions_reponses.length;

  constructor(private quizService: QuizServiceService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.verifReponses();
    this.resultat = this.quizService.resultat;
  }

  goToHome(){
    this.router.navigate(['/']);
    this.quizService.resetQuiz();
  }

}
