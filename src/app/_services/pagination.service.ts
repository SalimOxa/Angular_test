import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  RESTAPI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  fetchPosts(): Observable<any> {
    return this.httpClient.get(this.RESTAPI);
  }
}
