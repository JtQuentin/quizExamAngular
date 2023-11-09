import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/quiz-service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {

  playerName = '';

  constructor(private quizService : QuizServiceService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }

}
