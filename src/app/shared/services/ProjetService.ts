import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { Projet } from '../models/iProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private readonly endpoint = '/api/projects';

  constructor(private baseService: BaseService) {}

  getProjets(): Observable<Projet[]> {
    return this.baseService.get<Projet[]>(this.endpoint);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.baseService.get<Projet>(`${this.endpoint}/${id}`);
  }

  saveProjet(projet: Projet): Observable<Projet> {
    return this.baseService.save<Projet, Projet>(this.endpoint, projet);
  }

  updateProjet(id: number, projet: Partial<Projet>): Observable<Projet> {
    return this.baseService.put<Partial<Projet>, Projet>(`${this.endpoint}/${id}`, projet);
  }

  deleteProjet(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}
