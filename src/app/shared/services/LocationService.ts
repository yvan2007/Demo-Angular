import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { Localisation } from '../models/iLocalisation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly endpoint = '/api/locations';

  constructor(private baseService: BaseService) {}

  getLocations(): Observable<Localisation[]> {
    return this.baseService.get<Localisation[]>(this.endpoint);
  }

  getLocationById(id: number): Observable<Localisation> {
    return this.baseService.get<Localisation>(`${this.endpoint}/${id}`);
  }

  saveLocation(location: Localisation): Observable<Localisation> {
    return this.baseService.save<Localisation, Localisation>(this.endpoint, location);
  }

  updateLocation(id: number, location: Partial<Localisation>): Observable<Localisation> {
    return this.baseService.put<Partial<Localisation>, Localisation>(`${this.endpoint}/${id}`, location);
  }

  deleteLocation(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}
