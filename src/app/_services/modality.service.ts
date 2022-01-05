import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ModalityService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) {
  }
  getModalitysList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}modalitys`, this.options);
  }
  createModality(modality): Observable<any> {
    return this.http.post(`${this.AUTH_API}modalitys`, {
      name: modality.name
    }, httpOptions);
  }
  getModalityById(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}modalitys/${id}`);
  }
  deleteModality(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}modalitys/${id}`);
  }
  updateModality(id: any, user: any): Observable<any> {
    return this.http.put(`${this.AUTH_API}modalitys/${id}`, user);
  }
}
