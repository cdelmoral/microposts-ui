import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { UsersService } from '../users.service';

@Component({
  selector: 'mp-user-new',
  templateUrl: './user-new.component.html',
  styles: []
})
export class UserNewComponent {

  public newUser = { name: '', email: '', password: ''};
  public confirmation: string;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private flashService: FlashMessagesService
  ) { }

  public async createUser() {
    try {
      let response = await this.usersService.createUser(this.newUser);
      this.flashService.show(response.message, {timeout: 5000, cssClass: 'alert-success'});
      this.router.navigate(['/login']);
    } catch(e) {
      throw e;
    }
  }
}
