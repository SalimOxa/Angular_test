import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Domaine} from '../domaine';
import {BehaviorSubject} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) {
  }
  getDomainsList(): Observable<any> {
    return this.http.get(AUTH_API + 'domains', this.options);
  }
  // getDomainsList(): Observable<Domaine[]> {
  //   return this.http.get<Domaine[]>('${this.baseURL}');
  // }
  // createDomain(domain: Domaine): Observable<Object> {
  //   return this.http.post('${this.baseUrl}', domain);
  // }
  createDomain(domaine): Observable<any> {
    return this.http.post(`${this.AUTH_API}domains`, {
      name: domaine.name
    }, httpOptions);
  }
  getDomainById(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}domains/${id}`);
  }
  deleteDomain(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}domains/${id}`);
  }
  updateDomain(id: any, user: any): Observable<any> {
    return this.http.put(`${this.AUTH_API}domains/${id}`, user);
  }
  // getDomainById(id: number): Observable<Domaine> {
  //   return this.http.get<Domaine>('${this.baseURL}/${id}');
  // }
  // updateDomain(id: number, domain: Domaine): Observable<Object> {
  //   return this.http.put('${this.baseUrl}/${id}', domain);
  // }
  // deleteDomain(id: number): Observable<Object> {
  //   return this.http.delete('${this.baseURL}/${id}');
  // }
}
