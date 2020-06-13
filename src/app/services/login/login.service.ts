import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Visitor } from '../../models/Visitor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:9080/marketplace_war_exploded/resources/visitor';

  constructor(private http: HttpClient) { }

  login(password: string, email: string): Observable<Visitor> {
    const paramOne = new HttpParams().set('email', email);
    const paramTwo = new HttpParams().set('password', password);
    return this.http.get<Visitor>(`${this.loginUrl}/?${paramOne}&${paramTwo}`);
  }
}
