import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStarship } from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(private http: HttpClient) { }

  getDetailStarship(starshipId: string): Observable<IStarship> {
    return this.http.get<IStarship>(`${this.apiUrl}/${starshipId}`);
  }
}