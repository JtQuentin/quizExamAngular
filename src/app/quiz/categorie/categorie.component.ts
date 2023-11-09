import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/quiz-service.service';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {

  playerName = '';
  categories: any[] = this.categorieService.categories;

  constructor(private quizService : QuizServiceService, private router: Router,private route: ActivatedRoute, private categorieService : CategorieService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
    this.categorieService.getCategories();
  }

  goToQuiz(id: number)
  {
    this.router.navigate(['/quiz', id]);
  }

}
