import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  questions_reponses: any[] = [];
  reponsesJoueur: {questionId: number, reponse: string} [] = [];
  resultat = 0;
  quizEstTermine = false;
  playerName: string = '';

  constructor(private http: HttpClient) { }

  verifReponses(){
    this.resultat = 0;
    for (let i = 0; i < this.reponsesJoueur.length; i++) {
      const question = this.questions_reponses.find((q) => q.id === this.reponsesJoueur[i].questionId);
      if (!question) continue;
      for (let j = 0; j < question.reponses.length; j++) {
        const currentAnswer = question.reponses[j];
        if (currentAnswer.correcte && this.reponsesJoueur[i].reponse === currentAnswer.reponse) {
          this.resultat++;
          break;
        }
      }
    }
    this.quizEstTermine = true;
  }

  ajouteReponse(reponse: string, questionId: number) {
    const estRepondu = this.reponsesJoueur.find((a) => a.questionId === questionId);
    if (estRepondu){
      estRepondu.reponse = reponse;
      return;
    }
    this.reponsesJoueur.push({questionId, reponse});
  }

  getQuestionsReponses(){
    this.http.get('http://localhost:3000/questions').subscribe((questions: any) => {
      for (const question of questions){
        this.http.get(`http://localhost:3000/reponses?questionId=${question.id}`).subscribe((reponses: any) => {
          this.questions_reponses.push({
            id: question.id,
            question: question.question,
            reponses
          });
        });
      }
    });
  }

  resetQuiz(){
    this.questions_reponses = [];
    this.reponsesJoueur = [];
    this.resultat = 0;
    this.quizEstTermine = false;
  }
}
