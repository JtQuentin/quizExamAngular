import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: any[] = [];

  constructor(private http: HttpClient) { }

  getCategories(){
    this.http.get('http://localhost:3000/categories').subscribe((cate : any) => {
      for (const categorie of cate){
          this.categories.push({
            id: categorie.id,
            label: categorie.label,
          });
        
      }
    })
  }
  
}
