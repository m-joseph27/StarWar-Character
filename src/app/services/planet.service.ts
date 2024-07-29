import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet } from '../interfaces/planet.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetailPlanets(planetId: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(`${this.apiUrl}planets/${planetId}`);
  }
}