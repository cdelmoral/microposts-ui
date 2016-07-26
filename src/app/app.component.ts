import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { HeaderComponent, FooterComponent } from './pages';
import { AuthService } from './auth';
import { MicropostsService } from './microposts';

@Component({
  moduleId: module.id,
  selector: 'mp-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  providers: [HTTP_PROVIDERS, AuthService, MicropostsService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
