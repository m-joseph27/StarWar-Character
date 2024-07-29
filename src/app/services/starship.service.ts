import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStarship } from '../interfaces/starships.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetailStarship(starshipId: string): Observable<IStarship> {
    return this.http.get<IStarship>(`${this.apiUrl}starships/${starshipId}`);
  }
}