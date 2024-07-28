import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: CardComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
  { path: 'films/:id', component: FilmDetailComponent },
];
