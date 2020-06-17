import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: string;

  constructor(private route: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((state) => {
      this.loggedIn = state;
    });
    if (this.loggedIn == null){
      this.loggedIn = 'uitgelogd';
    }
  }


  logOut() {
    sessionStorage.clear();
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
