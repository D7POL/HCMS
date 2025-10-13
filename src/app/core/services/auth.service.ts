import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthCredentials, AuthUser } from '../models/user';
import { MockDataService } from './mock-data.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  readonly currentUser$ = this.currentUserSubject.asObservable();

  constructor(private readonly mockData: MockDataService) {}

  login(credentials: AuthCredentials): Observable<AuthUser | null> {
    const user = this.mockData
      .getUsers()
      .find(u => u.username === credentials.username && credentials.password === this.getMockPasswordFor(u.username));
    this.currentUserSubject.next(user ?? null);
    return of(user ?? null);
  }

  private getMockPasswordFor(username: string): string {
    const table: Record<string, string> = { ayse: 'ayse123', mehmet: 'mehmet123' };
    return table[username] ?? 'password';
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}


