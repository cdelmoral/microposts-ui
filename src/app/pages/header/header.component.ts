import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AuthService} from '../../auth';

@Component({
  moduleId: module.id,
  selector: 'mp-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

}
