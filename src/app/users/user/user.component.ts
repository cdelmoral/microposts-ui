import { Component, Input } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'mp-user',
  template: `
    <h1>{{user.name}}</h1>
    <span><a href="/users/{{ user.id }}">view my profile</a></span>
    <span>{{pluralize(user.micropostsCount, "micropost")}}</span>
  `,
  styles: []
})
export class UserComponent {

  @Input()
  public user: User;

  constructor() { }

  public pluralize(num: number, noun: string):string {
    return num + ' ' + noun;
  }

}
