import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilmResponse, IFilms } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://swapi.dev/api/films';

  constructor(private http: HttpClient) { }

  getDetailFilm(filmId: string): Observable<IFilms> {
    return this.http.get<IFilms>(`${this.apiUrl}/${filmId}`);
  }
}