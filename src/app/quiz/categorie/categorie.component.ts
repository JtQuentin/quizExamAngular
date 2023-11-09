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
  catName = '';

  constructor(private quizService : QuizServiceService, private router: Router,private route: ActivatedRoute, private categorieService : CategorieService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
    if (this.catName!== '') {
      console.log("search 2")
      //this.categorieService.garbage();
      this.categorieService.getCategory(this.catName);
      this.categories = this.categorieService.categories;
      console.log(this.categories)
    } else {
      this.categorieService.getCategories();
    }
    
  }

  search() {
    console.log("search")
    //this.categorieService.garbage();
    //this.categorieService.getCategory(this.catName);
    this.ngOnInit()
    //this.router.navigate(['/categories', this.playerName]);
  }

}
