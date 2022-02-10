import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Panier} from '../panier';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) {
  }
  getPanierList(): Observable<any> {
    return this.http.get(AUTH_API + 'panier', this.options);
  }
  getPanierById(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}panier/${id}`);
  }
  getPanierByEmail(email: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}paniers/${email}`, this.options);
  }
  // getformationByEmail(email: any): Observable<any> {
  //   return this.http.get(`${this.AUTH_API}trainingss/${email}`, this.options);
  // }

  createPanier(userId: number, trainingId: number, panier): Observable<any> {
    return this.http.post(`${this.AUTH_API}panier/user/${userId}/training/${trainingId}`, {
      // training: [panier.training]
      // etatPanier: panier.etatPanier
    }, httpOptions);
  }
  createPanier1(userId: number, eventId: number, panier): Observable<any> {
    return this.http.post(`${this.AUTH_API}panier/user/${userId}/event/${eventId}`, {
      // training: [panier.training]
      // etatPanier: panier.etatPanier
    }, httpOptions);
  }
  createPanier2(panier: Panier): Observable<any> {
    return this.http.post(`${this.AUTH_API}panier`, {
      // etatPanier: panier.etatPanier,
      user: [panier.user]
      // training: [panier.training]
    }, httpOptions);
  }
  deletePanier(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}panier/${id}`);
  }
  getTotalPrix(id: number): Observable<any> {
    return this.http.get(`${this.AUTH_API}panier/totalPrix/${id}`, this.options);
  }
}
