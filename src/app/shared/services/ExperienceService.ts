import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { Experience } from '../models/iExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly endpoint = '/api/experiences';

  constructor(private baseService: BaseService) {}

  getExperiences(): Observable<Experience[]> {
    return this.baseService.get<Experience[]>(this.endpoint);
  }

  getExperienceById(id: number): Observable<Experience> {
    return this.baseService.get<Experience>(`${this.endpoint}/${id}`);
  }

  saveExperience(experience: Experience): Observable<Experience> {
    return this.baseService.save<Experience, Experience>(this.endpoint, experience);
  }

  updateExperience(id: number, experience: Partial<Experience>): Observable<Experience> {
    return this.baseService.put<Partial<Experience>, Experience>(`${this.endpoint}/${id}`, experience);
  }

  deleteExperience(id: number): Observable<{ success: boolean }> {
    return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
  }
}
