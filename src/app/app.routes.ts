import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: CardComponent },
];
