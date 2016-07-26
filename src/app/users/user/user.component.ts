import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from '../';

@Component({
  moduleId: module.id,
  selector: 'mp-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent {
  
  @Input()
  public user: UserModel;
  
  public pluralize(num: number, noun: string) {
    return num + ' ' + noun;
  }
}
