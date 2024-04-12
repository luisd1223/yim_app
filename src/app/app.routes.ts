import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage )
  },
  {
    path: 'classes-list',
    loadComponent: () => import('./classes-list/classes-list.page').then( m => m.ClassesListPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  }
];
