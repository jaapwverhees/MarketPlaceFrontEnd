import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Visitor} from '../../models/Visitor';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  Url = 'http://localhost:9080/marketplace_war_exploded/resources/visitor';

  constructor(private http: HttpClient) {
  }
// firstname: visitor.firstname,
  // lastname: visitor.lastname,
  // emailadress: visitor.emailadress,
  // password: visitor.password
  postVisitor(visitor: Visitor) {
    this.http.post(this.Url,
      JSON.parse(JSON.stringify(visitor))).subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }
}
