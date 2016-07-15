import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../';

@Component({
  moduleId: module.id,
  selector: 'mp-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router) {}

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
