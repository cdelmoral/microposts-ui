import {Component} from '@angular/core';
import {Router} from '@angular/router';
// import {NgForm} from '@angular/forms';
import {AuthService} from '../';

@Component({
  moduleId: module.id,
  selector: 'mp-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  
  public loginForm: Form = new Form();

  constructor(public authService: AuthService, public router: Router) {}
  
  onSubmit() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }
}

class Form {
  public email: string;
  public password: string;
}
