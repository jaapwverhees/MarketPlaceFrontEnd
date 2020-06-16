import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.loggedIn = sessionStorage.getItem('visitorEmail') != null;
  }

  logOut(){
    sessionStorage.clear();
    this.loggedIn = false;
    this.route.navigate(['/']);
  }

}
