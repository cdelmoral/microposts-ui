import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { FlashMessagesService } from 'angular2-flash-messages';

import { PasswordResetsService } from '../password-resets.service';

@Component({
  selector: 'mp-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styles: []
})
export class PasswordResetFormComponent implements OnInit {

  public newPassword: string;
  public passwordConfirmation: string;

  private userId: string;
  private token: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private flashService: FlashMessagesService,
    private passwordResetsService: PasswordResetsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { result: any }) => {
      if (data.result.valid) {
        this.userId = data.result.user.id;
        this.token = data.result.user.token;
      } else {
        // this.flashService.show('Invalid link.', {timeout: 5000, cssClass: 'alert-danger'});
        this.router.navigate(['/home']);
      }
    });
  }

  public async updatePassword() {
    let message;
    try {
      message = await this.passwordResetsService.updatePassword(this.userId, this.token,
        this.newPassword);
    } catch(e) {
      // this.flashService.show(e.message, {timeout: 5000, cssClass: 'alert-danger'});
      this.router.navigate(['/home']);
    }

    // this.flashService.show(message, {timeout: 5000, cssClass: 'alert-success'});
    this.router.navigate(['/login']);
  }

}
