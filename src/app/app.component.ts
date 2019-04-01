import { Component } from '@angular/core';

@Component({
  selector: 'mp-root',
  template: `
    <mp-header></mp-header>
    <div class="container">
      <flash-messages></flash-messages>
      <router-outlet></router-outlet>
      <mp-footer></mp-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
