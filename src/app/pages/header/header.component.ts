import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AuthService} from '../../auth';

@Component({
  moduleId: module.id,
  selector: 'mp-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent {

  constructor(public authService: AuthService, public router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
