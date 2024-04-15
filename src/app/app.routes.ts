import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome-page',
    loadComponent: () => import('./welcome-page/welcome-page.page').then( m => m.WelcomePage )
  },
  {
    path: 'classes-list',
    loadComponent: () => import('./classes-list/classes-list.page').then( m => m.ClassesListPage)
  },
  {
    path: 'completed-classes',
    loadComponent: () => import('./completed-classes/completed-classes.page').then( m => m.CompletedClassesPage)
  },
  {
    path: 'achievements',
    loadComponent: () => import('./achievements/achievements.page').then( m => m.AchievementsPage)
  },
];
