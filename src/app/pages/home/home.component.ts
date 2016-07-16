import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../../auth/';

@Component({
  moduleId: module.id,
  selector: 'mp-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class HomeComponent {

  constructor(public authService: AuthService) {}

}
