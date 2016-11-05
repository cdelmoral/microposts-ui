import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'mp-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public loginEmail:String;
  public loginPassword:String;

  constructor(public authService: AuthService, public router: Router) { }

  public async onSubmit() {
    try {
      let user = await this.authService.login(this.loginEmail, this.loginPassword);
      this.router.navigate(['/home']);
    } catch(e) {
      console.log(e);
    }
  }
}
