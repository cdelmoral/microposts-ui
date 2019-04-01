import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'mp-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public loginEmail:String;
  public loginPassword:String;
  public submitted: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    // private flashService: FlashMessagesService
  ) { }

  public async onSubmit() {
    this.submitted = true;
    try {
      let user = await this.authService.login(this.loginEmail, this.loginPassword);
      this.router.navigate(['/home']);
    } catch(e) {
      // this.flashService.show(e.message, {timeout: 5000, cssClass: 'alert-danger'});
    }
    this.submitted = false;
  }
}
