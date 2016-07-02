import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { HeaderComponent, FooterComponent } from './pages';

@Component({
  moduleId: module.id,
  selector: 'mp-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
