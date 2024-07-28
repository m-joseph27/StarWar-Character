import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpecies } from '../interfaces/species.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private apiUrl = 'https://swapi.dev/api/species';

  constructor(private http: HttpClient) { }

  getDetailSpecies(speciesId: string): Observable<ISpecies> {
    return this.http.get<ISpecies>(`${this.apiUrl}/${speciesId}`);
  }
}