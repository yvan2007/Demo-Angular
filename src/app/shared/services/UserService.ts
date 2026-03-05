import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/BaseService';
import { IUser } from '../models/iUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private readonly endpoint = '/api/users';

    constructor(private baseService: BaseService) {}

    getUsers(): Observable<IUser[]> {
        return this.baseService.get<IUser[]>(this.endpoint);
    }

    getUserById(id: number): Observable<IUser> {
        return this.baseService.get<IUser>(`${this.endpoint}/${id}`);
    }

    saveUser(user: IUser): Observable<IUser> {
        return this.baseService.save<IUser, IUser>(this.endpoint, user);
    }

    updateUser(id: number, user: Partial<IUser>): Observable<IUser> {
        return this.baseService.put<Partial<IUser>, IUser>(`${this.endpoint}/${id}`, user);
    }

    deleteUser(id: number): Observable<{ success: boolean }> {
        return this.baseService.delete<{ success: boolean }>(`${this.endpoint}/${id}`);
    }
}