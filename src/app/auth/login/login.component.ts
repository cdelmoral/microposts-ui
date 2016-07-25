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
  
  public loginForm: Form = new Form();

  constructor(public authService: AuthService, public router: Router) {}
  
  public async onSubmit() {
    try {
      let user = await this.authService.login(this.loginForm.email, this.loginForm.password);
      this.router.navigate(['/home']);
    } catch(e) {
      console.log(e);
    }
  }
}

class Form {
  public email: string;
  public password: string;
}
