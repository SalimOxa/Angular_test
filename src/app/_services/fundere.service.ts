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
export class FundereService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) { }
  getFundersList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}funders`, this.options);
  }
  createFunder(fundere): Observable<any> {
    return this.http.post(`${this.AUTH_API}funders`, {
      name: fundere.name
    }, httpOptions);
  }
  getFunderByID(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}funders/${id}`);
  }
  deleteFunder(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}funders/${id}`);
  }
  updateFunder(id: any, user: any): Observable<any> {
    return this.http.put(`${this.AUTH_API}funders/${id}`, user);
  }
}
