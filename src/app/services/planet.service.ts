import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet, IPlanetRespon } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) { }

  getPlanets(page: number): Observable<IPlanetRespon> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getDetailPlanets(planetId: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(`${this.apiUrl}/${planetId}`);
  }
}