import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { IReseauSocial } from '../models/iReseauSocial';

@Injectable({
  providedIn: 'root'
})
export class ReseauSocialService {
  private readonly endpoint = '/api/social-links';

  constructor(private baseService: BaseService) {}

  getReseauxSociaux(): Observable<IReseauSocial[]> {
    return this.baseService.get<IReseauSocial[]>(this.endpoint);
  }

  getReseauSocialById(id: number): Observable<IReseauSocial> {
    return this.baseService.get<IReseauSocial>(`${this.endpoint}/${id}`);
  }

  saveReseauSocial(reseau: IReseauSocial): Observable<IReseauSocial> {
    return this.baseService.save<IReseauSocial, IReseauSocial>(this.endpoint, reseau);
  }

  updateReseauSocial(id: number, reseau: Partial<IReseauSocial>): Observable<IReseauSocial> {
    return this.baseService.put<Partial<IReseauSocial>, IReseauSocial>(`${this.endpoint}/${id}`, reseau);
  }

  deleteReseauSocial(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}
