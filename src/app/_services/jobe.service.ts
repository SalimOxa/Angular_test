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
export class JobeService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) { }
  getJobsList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}jobs`, this.options);
  }
  createJob(jobe): Observable<any> {
    return this.http.post(`${this.AUTH_API}jobs`, {
      name: jobe.name
    }, httpOptions);
  }
  getJobById(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}jobs/${id}`);
  }
  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}jobs/${id}`);
  }
  updateJob(id: any, user: any): Observable<any> {
    return this.http.put(`${this.AUTH_API}jobs/${id}`, user);
  }
}
