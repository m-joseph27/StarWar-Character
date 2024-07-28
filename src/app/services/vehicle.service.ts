import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://swapi.dev/api/vehicles';

  constructor(private http: HttpClient) { }

  getDetailVehicle(vehicleId: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${this.apiUrl}/${vehicleId}`);
  }
}