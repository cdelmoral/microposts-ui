import { Component } from '@angular/core';

@Component({
  selector: 'mp-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  public loginEmail:String;
  public loginPassword:String;

  constructor() { }

  onSubmit() {
  }
}
