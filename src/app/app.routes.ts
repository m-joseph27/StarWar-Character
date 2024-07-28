import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { PlanetDetailComponent } from './views/planet-detail/planet-detail.component';
import { VehicleDetailComponent } from './views/vehicle-detail/vehicle-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: CardComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent },
];
