import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDetailPerson(personId: string): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.apiUrl}/${personId}`);
  }
}
