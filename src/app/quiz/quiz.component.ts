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

  constructor(private quizService : QuizServiceService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
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
