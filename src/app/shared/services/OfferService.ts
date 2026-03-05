import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { Service } from '../models/iService';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private readonly endpoint = '/api/services';

  constructor(private baseService: BaseService) {}

  getOffers(): Observable<Service[]> {
    return this.baseService.get<Service[]>(this.endpoint);
  }

  getOfferById(id: number): Observable<Service> {
    return this.baseService.get<Service>(`${this.endpoint}/${id}`);
  }

  saveOffer(offer: Service): Observable<Service> {
    return this.baseService.save<Service, Service>(this.endpoint, offer);
  }

  updateOffer(id: number, offer: Partial<Service>): Observable<Service> {
    return this.baseService.put<Partial<Service>, Service>(`${this.endpoint}/${id}`, offer);
  }

  deleteOffer(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}
