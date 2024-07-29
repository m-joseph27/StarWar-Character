import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVehicle } from '../interfaces/vehicle.interface';
import { environment } from '../environments/environment.js';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetailVehicle(vehicleId: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${this.apiUrl}vehicles/${vehicleId}`);
  }
}