import { Component, Input, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/quiz-service.service';
import { TimerService } from '../timer/timer.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  @Input() reponses: any[] = [];
  @Input() questionId: number = 0;
  quizEstTermine = this.quizService.quizEstTermine;
  elapsedTime: number = 0;
  private timer: any;


  constructor(private quizService: QuizServiceService, private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.startTimer();
    this.startLocalTimer();
  }

  startLocalTimer() {
    this.timer = setTimeout(() => {
      this.elapsedTime++;
      this.startLocalTimer(); // Lance le timer local récursivement
    }, 1000); // Déclenche toutes les secondes
  }

  getLettreReponse(j: number){
    return String.fromCharCode(65 + j);
  }

  ajouteReponse(reponse: string, questionId: number) {
    this.quizService.ajouteReponse(reponse, questionId);
    this.timerService.stopTimer();
    clearTimeout(this.timer); 
  }

  questionEstSelectionee(reponse: string, id: number) {
    const estRepondu = this.quizService.reponsesJoueur.find((a) => a.questionId === id);
    if (!estRepondu) return false;
    return estRepondu.reponse === reponse;
  }

  questionEstPasSelectionee(reponse: string, id: number) {
    const estRepondu = this.quizService.reponsesJoueur.find((a) => a.questionId === id);
    if (!estRepondu) return true;
    return estRepondu.reponse === reponse;
  }

}
