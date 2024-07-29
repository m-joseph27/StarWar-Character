import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpecies } from '../interfaces/species.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetailSpecies(speciesId: string): Observable<ISpecies> {
    return this.http.get<ISpecies>(`${this.apiUrl}species/${speciesId}`);
  }
}