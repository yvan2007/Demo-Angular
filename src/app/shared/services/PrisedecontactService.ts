import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPriseDeContact } from '../models/iPriseDeContact';
import { BaseService } from '../base/BaseService';

@Injectable({
  providedIn: 'root'
})
export class PriseDeContactService {
  private readonly endpoint = '/api/contacts';

  constructor(private baseService: BaseService) {}

  savePriseDeContact(priseDeContact: IPriseDeContact): Observable<IPriseDeContact> {
    return this.baseService.save<IPriseDeContact, IPriseDeContact>(this.endpoint, priseDeContact);
  }

  getPrisesDeContact(): Observable<IPriseDeContact[]> {
    return this.baseService.get<IPriseDeContact[]>(this.endpoint);
  }

  getPriseDeContactById(id: number): Observable<IPriseDeContact> {
    return this.baseService.get<IPriseDeContact>(`${this.endpoint}/${id}`);
  }

  updatePriseDeContact(id: number, priseDeContact: Partial<IPriseDeContact>): Observable<IPriseDeContact> {
    return this.baseService.put<Partial<IPriseDeContact>, IPriseDeContact>(`${this.endpoint}/${id}`, priseDeContact);
  }

  deletePriseDeContact(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}