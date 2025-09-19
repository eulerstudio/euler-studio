import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Euler Studio - Digital Solutions & Web Development'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
