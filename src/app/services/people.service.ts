import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson, IResponse } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<IResponse> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getDetailPerson(personId: string): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.apiUrl}/${personId}`);
  }
}
