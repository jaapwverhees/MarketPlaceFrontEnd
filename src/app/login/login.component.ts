import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from '../services/login/login.service';
import {Visitor} from '../models/Visitor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Output() login: EventEmitter<any> = new EventEmitter();

  email: string;

  password: string;

  visitor: Visitor;

  loggedIn: boolean;



  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.visitor == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }


  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    }
    this.loginService.login(this.password, this.email).subscribe(visitor => {
      this.visitor = visitor;
      this.loggedIn = true;
    });
  }

  onLogOut() {
    this.visitor = null;
    this.loggedIn = false;
    this.password = null;
    this.email = null;
  }
}
