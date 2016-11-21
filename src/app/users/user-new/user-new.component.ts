import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'mp-user-new',
  templateUrl: './user-new.component.html',
  styles: []
})
export class UserNewComponent {

  public newUser = { name: '', email: '', password: ''};
  public confirmation: string;

  constructor(private usersService: UsersService, private router: Router) { }

  public async createUser() {
    try {
      let response = await this.usersService.createUser(this.newUser);
      console.log(response);
      // TODO: show message in flash
      this.router.navigate(['/login']);
    } catch(e) {
      throw e;
    }
  }
}
