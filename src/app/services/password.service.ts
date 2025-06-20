import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PasswordItem } from '../models/password-item.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private baseUrl = 'https://localhost:7075'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<PasswordItem[]> {
    return this.http.get<PasswordItem[]>(`${this.baseUrl}/api/Password`);
  }

  add(password: PasswordItem): Observable<PasswordItem> {
    return this.http.post<PasswordItem>(`${this.baseUrl}/api/Password`, password);
  }

  update(item: PasswordItem): Observable<PasswordItem> {
    return this.http.put<PasswordItem>(`${this.baseUrl}/api/Password/${item.id}`, item);

  }

  getDecryptedPassword(id: number): Observable<PasswordItem> {
    return this.http.get<PasswordItem>(`${this.baseUrl}/api/Password/decrypted/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/Password/${id}`);
  }
}
