import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class AppComponent {
  constructor(private router: Router) {

  }

  get showMenu(): boolean {
    return this.router.url !== '/welcome-page';
  }
}
