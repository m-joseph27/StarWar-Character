import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson, IResponse } from '../interfaces/people.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<IResponse> {
    return this.http.get<any>(`${this.apiUrl}people?page=${page}`);
  }

  getDetailPerson(personId: string): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.apiUrl}people/${personId}`);
  }
}
