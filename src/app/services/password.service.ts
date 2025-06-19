import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PasswordItem } from '../models/password-item.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private baseUrl = 'https://localhost:5129/api/passwords'; // ggf. anpassen

  constructor(private http: HttpClient) {}

  getAll(): Observable<PasswordItem[]> {
    return this.http.get<PasswordItem[]>(this.baseUrl);
  }

  add(password: PasswordItem): Observable<PasswordItem> {
    return this.http.post<PasswordItem>(this.baseUrl, password);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
