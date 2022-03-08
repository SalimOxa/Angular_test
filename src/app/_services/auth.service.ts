import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../User';
import {map} from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService { private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private roles: string[];
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private AUTH_API = 'http://localhost:8080/api/auth/';
  private options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  } public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }));
  }

  register1(user): Observable<any> {
    return this.http.post(`${this.AUTH_API}signup`, {
      username: user.username,
      email: user.email,
      tel: user.tel,
      photo: user.photo,
      // role: [user.role],
      password: user.password,
    }, httpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(`${this.AUTH_API}signup`, {
      username: user.username,
      email: user.email,
      tel: user.tel,
      photo: user.photo,
      role: [user.role],
      password: user.password,
    }, httpOptions);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(AUTH_API + 'users', this.options);
  }
  /*updateUser(user: User): Observable<any>  {
    return this.http.put(AUTH_API + user.id, user);
  }*/
  updateUser(user: any): Observable<any> {
    // const roles: any[] = [];
    // roles.push(user.roles);
    // user.roles = roles;
    console.log(user);
    return this.http.put(`${this.AUTH_API}update`, user);
  }
  updateUser2(id: any, user: any): Observable<any> {
    return this.http.put(`${this.AUTH_API}users/${id}`, user);
  }
  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.AUTH_API}users/${id}`);
  }
  getRoleList(): Observable<any> {
    return this.http.get(`${this.AUTH_API}roles`, this.options);
  }
  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.AUTH_API}users/${id}`);
  }
  // getUserByRole(name: any): Observable<any> {
  //   return this.http.get(`${this.AUTH_API}moderator/${name}`);
  // }
  // getActByIdDep(id: any): Observable<any> {
  //   return this.http.get(`${this.AUTH_API}departements/${id}/activites`);
  // }
  /*
  getUser(id: number): Observable<any> {
    return this.http.get(API_URL + `${id}`);
  }
  */
  /* getUsersList(): Observable<any> {
     return this.http.get(AUTH_API + 'users');
   }*/

}
