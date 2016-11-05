import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'mp-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor(public authService: AuthService) { }
}
