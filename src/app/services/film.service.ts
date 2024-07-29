import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilms } from '../interfaces/film.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetailFilm(filmId: string): Observable<IFilms> {
    return this.http.get<IFilms>(`${this.apiUrl}films/${filmId}`);
  }
}