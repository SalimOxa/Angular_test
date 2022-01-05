import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }
  getEventList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}events`, this.options);
  }
  // createEvent(event): Observable<any> {
  //   return this.http.post(`${this.AUTH_API}events`, {
  //     title: event.title,
  //     description: event.description,
  //     rate: event.rate,
  //     duration: event.duration,
  //     conditions: event.conditions,
  //     targetedaudience: event.targetedaudience,
  //     object: event.object,
  //     exammodalities: event.exammodalities,
  //     program: event.program,
  //     photo: event.photo,
  //     jobs: [event.jobs],
  //     fender: [event.fender],
  //     modality: [event.modality],
  //     domain: [event.domain]
  //   }, httpOptions);
  // }
  addEvent(event:any,jobids:string,domains:string,funders:string,modalitys:string){
    return this.http.post(`${this.AUTH_API}events/new?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`,event)
  }
  getEventById(id: any): Observable<any> {
    return this.http.get<Event>(`${this.AUTH_API}events/${id}`);
  }
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}events/${id}`);
  }
 // updateEvent(id:any, user:any):Observable<any>{
 //   return this.http.put<Event>(`${this.AUTH_API}events/${id}`,user);
 // }
addJobtoEvent(idevent:any,idjobes:any){
  return this.http.get(`${this.AUTH_API}events/${idevent}/addjobtoevent/${idjobes}`);
}
addDomaintoEvent(idevent:any,iddomaines:any){
  return this.http.get(`${this.AUTH_API}events/${idevent}/adddomaintoevent/${iddomaines}`);
}

addFundertoEvent(idevent:any,idfunderes:any){
  return this.http.get(`${this.AUTH_API}events/${idevent}/addfendertoevent/${idfunderes}`);
}
addModalitytoEvent(idevent:any,idmodalityes:any){
  return this.http.get(`${this.AUTH_API}events/${idevent}/addmodalitytoevent/${idmodalityes}`);
}

  updateEvent(id: any,event:any,jobids:string,domains:string,funders:string,modalitys:string): Observable<any> {

    console.log(`${this.AUTH_API}events/${id}/update?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`);

    return this.http.put<any>(`${this.AUTH_API}events/${id}/update?jobids=${jobids}&domainids=${domains}&funderids=${funders}&modalitysids=${modalitys}`, event);
  }
}
