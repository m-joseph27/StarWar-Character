import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PeopleDetailComponent } from './views/people-detail/people-detail.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { PlanetDetailComponent } from './views/planet-detail/planet-detail.component';
import { VehicleDetailComponent } from './views/vehicle-detail/vehicle-detail.component';
import { StarshipsDetailComponent } from './views/starships-detail/starships-detail.component';
import { SpeciesDetailComponent } from './views/species-detail/species-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: CardComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent },
  { path: 'starships/:id', component: StarshipsDetailComponent },
  { path: 'species/:id', component: SpeciesDetailComponent },
];
