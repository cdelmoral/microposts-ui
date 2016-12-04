import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { PasswordResetsService } from '../password-resets.service';

@Component({
  selector: 'mp-password-reset-create',
  templateUrl: './password-reset-create.component.html',
  styles: []
})
export class PasswordResetCreateComponent {

  public email: string;

  constructor(
    private passwordResetsService: PasswordResetsService,
    private router: Router,
    private flashService: FlashMessagesService
  ) { }

  public async createResetToken() {
    let message = await this.passwordResetsService.createPasswordReset(this.email);
    this.flashService.show(message, {timeout: 5000, cssClass: 'alert-success'})
    this.router.navigate(['/home']);
  }

}
