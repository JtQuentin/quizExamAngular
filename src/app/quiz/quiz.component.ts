import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../quiz-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent{

  quizEstTermine = this.quizService.quizEstTermine;
  playerName = '';
  showPopup = false;
  id = '';

  constructor(private quizService : QuizServiceService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.quizService.quizChoosed = params['playerName']; // to fix c'est bizarre... mais c pour test
      console.log(params);
      if (params['id'] !== undefined) { // à fix
        console.log('ouioui param')
        this.quizService.quizChoosed = params['id'];
        console.log(params['id']);
        //this.id = this.quizService.quizChoosed;
      }
    });
  }


  goToResultPage() {
    this.showPopup = true;
  }

  submitAnswers() {
    this.showPopup = false;
    this.router.navigate(['/result']);
  }

  cancelSubmit() {
    this.showPopup = false;
  }
  
}
