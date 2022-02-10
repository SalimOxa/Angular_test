import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Formation} from '../formation.models';
import {map} from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

  constructor(private http: HttpClient) {
  }

  getFormationsList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}trainings`, this.options);
  }
  getDomaineList():Observable<any> {
    return this.http.get(`${this.AUTH_API}domaines`, this.options);
  }
  getRoleList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}roles`, this.options);
  }
  // createFormation(formation): Observable<any> {
  //   return this.http.post(`${this.AUTH_API}trainings`, {
  //     title: formation.title,
  //     description: formation.description,
  //     rate: formation.rate,
  //     duration: formation.duration,
  //     conditions: formation.conditions,
  //     targetedaudience: formation.targetedaudience,
  //     object: formation.object,
  //     exammodalities: formation.exammodalities,
  //     program: formation.program,
  //     photo: formation.photo,
  //     jobs: [formation.jobs],
  //     fender: [formation.fender],
  //     modality: [formation.modality],
  //     domain: [formation.domain]
  //   }, httpOptions);
  // }
  addFormation(formation:any,jobids:string,domains:string,funders:string,modalitys:string){
    return this.http.post(`${this.AUTH_API}trainings/new?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`,formation)
  }
  getFormationById(id: any): Observable<any> {
    return this.http.get<Formation>(`${this.AUTH_API}trainings/${id}`);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}trainings/${id}`);
  }
  // updateFormation(id: any, user: any): Observable<any> {
  //   return this.http.put(`${this.AUTH_API}trainings/${id}`, user);
  //
  // }

  addJobtoTrainig(idtraining: any, idjob: any) {
    return this.http.get(`${this.AUTH_API}trainings/${idtraining}/addjobtotraining/${idjob}`);
  }

  addDomaintoTrainig(idtraining: any, iddomain: any) {
    return this.http.get(`${this.AUTH_API}trainings/${idtraining}/adddomaintotraining/${iddomain}`);
  }

  addMondalitytoTrainig(idtraining: any, idmodality: any) {
    return this.http.get(`${this.AUTH_API}trainings/${idtraining}/addmodalitytotraining/${idmodality}`);
  }

  addFunderetoTrainig(idtraining: any, idfunder: any) {
    return this.http.get(`${this.AUTH_API}trainings/${idtraining}/addfundertotraining/${idfunder}`);
  }
  getFormationsAssuranceList(){
    return this.http.get("http://localhost:8080/api/auth/chercherFormationAssurance/")
      .pipe(map(res => res ));

  }

  getFormationsbanqueList(){
    return this.http.get("http://localhost:8080/api/auth/chercherFormationbanque/")
      .pipe(map(res => res ));

  }
  getFormationsimmobilierList(){
    return this.http.get("http://localhost:8080/api/auth/chercherFormationimmobilier/")
      .pipe(map(res => res ));

  }
  updateFormation(id: any,formation:any,jobids:string,domains:string,funders:string,modalitys:string): Observable<any> {

    // console.log(`${this.AUTH_API}events/${id}/update?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`);

    return this.http.put<any>(`${this.AUTH_API}trainings/${id}/update?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`, formation);
  }
  getFormationsEnligneList(){
    return this.http.get("http://localhost:8080/api/auth/chercherFormationenligne")
      .pipe(map(res => res ));

  }
  getFormationsPresentielList(){
    return this.http.get(`${this.AUTH_API}chercherFormationpresentiel`)
      .pipe(map(res => res ));
  }
  getFormationCountEnligne(){
    return this.http.get(`${this.AUTH_API}training/countEnligne`)
  }
  getFormationCountPresentiel(){
    return this.http.get(`${this.AUTH_API}training/countPresentiel`)
  }getFormationCount(){

    return this.http.get(`${this.AUTH_API}training/count`)
  }
  getFormationCountAssurance(){
    return this.http.get(`${this.AUTH_API}training/countAssurance`)
  }

  getFormationCountBanque(){
    return this.http.get(`${this.AUTH_API}training/countBanque`)
  }
  getFormationCountImmobilier(){
    return this.http.get(`${this.AUTH_API}training/countImmobilier`)
  }
}
