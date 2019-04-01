import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from './user';
import { UsersService } from './users.service';

@Injectable()
export class UserActivationResolve implements Resolve<boolean> {

  constructor(private usersService: UsersService, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<boolean> {
    let userId = route.params['user_id'];
    let token = route.params['token'];

    let activated: boolean = await this.usersService.activateUser(userId, token);

    return activated;
  }
}
