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

  getFilms(page: number): Observable<IFilmResponse> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getDetailFilm(personId: string): Observable<IFilms> {
    return this.http.get<IFilms>(`${this.apiUrl}/${personId}`);
  }
}