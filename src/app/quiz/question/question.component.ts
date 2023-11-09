import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/quiz-service.service';
import { TimerService } from '../timer/timer.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{

  questions_reponses: any[] = this.quizService.questions_reponses;
  quizEstTermine = this.quizService.quizEstTermine;
  resultat = this.quizService.resultat;

  constructor(private quizService: QuizServiceService, private timerService: TimerService) { }


  ngOnInit(): void {
    this.quizService.getQuestionsReponses(1);
    this.timerService.startTimer();
  }

  verifReponses(){
    this.quizService.verifReponses();
    this.resultat = this.quizService.resultat;
    this.quizEstTermine = this.quizService.quizEstTermine;
  }


}
