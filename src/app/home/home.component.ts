import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  
  playerName = '';
  isPlayerNameConfirmed = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    //Nous verrons plus tard comment gérer cela avec des observables
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
  }


  get isPlayerNameFill() {
    return this.playerName.length < 1;
  }

  navigateToCategories() {
    this.router.navigate(['/categories', this.playerName]);
  }
  
}
