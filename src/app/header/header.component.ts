import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'mp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService, private router: Router) { }

  public async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/home']);
    } catch(e) {
      console.log(e);
    }
  }
}
