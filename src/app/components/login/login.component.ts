import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Visitor} from '../../models/Visitor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  password: string;

  visitor: Visitor;


  loggedIn: boolean;

  inValidUser: boolean;

  constructor(private loginService: LoginService,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('visitorEmail') === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this.visitor = new Visitor();
      this.visitor.firstname = sessionStorage.getItem('visitorName');
    }
    this.inValidUser = false;
  }

  onSubmit() {
    // FIXME laat op de invaliduser div zien igv ongeldige inlog;
    this.inValidUser = false;
    const credentials = {
      email: this.email,
      password: this.password
    };
    this.loginService.login(this.password, this.email).subscribe(visitor => {
      this.visitor = visitor;
      this.loggedIn = true;
      this.inValidUser = false;
      sessionStorage.setItem('visitorEmail', this.email);
      sessionStorage.setItem('VisitorAuth', this.password);
      sessionStorage.setItem('visitorName', visitor.firstname);
      this.password = null;
      this.email = null;
      //FIXME header word niet ververst.
      this.route.navigate(['/']);
    });
  }

  onLogOut() {
    this.visitor = null;
    this.loggedIn = false;
    sessionStorage.clear();
  }
}
