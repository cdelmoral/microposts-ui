import { Component, OnInit } from '@angular/core';
import {UserModel} from '../';

@Component({
  moduleId: module.id,
  selector: 'mp-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  
  public user: UserModel;

  constructor() {}

  ngOnInit() {
    this.user = new UserModel('Carlos', '0', 0);
    console.log(this.user);
  }
  
  public pluralize(num: number, noun: string) {
    return num + ' ' + noun;
  }

}
