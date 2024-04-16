import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, IonRouterOutlet, RouterLink],
})

export class AppComponent {
  constructor(private router: Router) {

  }

  get showMenu(): boolean {
    return this.router.url !== '/welcome-page';
  }
}
