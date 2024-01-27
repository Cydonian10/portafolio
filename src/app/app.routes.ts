import { Routes } from '@angular/router';
import HomePage from './pages/home/home.page';
import CurriculomPage from './pages/curriculon/curriculon.page';

export const routes: Routes = [
  {
    path:"",
    component:HomePage
  },
  {
    path:"gabriel",
    component:CurriculomPage
  }
];
