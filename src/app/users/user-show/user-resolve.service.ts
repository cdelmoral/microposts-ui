import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { MicropostsService } from '../../microposts/microposts.service';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private usersService: UsersService, private micropostsService: MicropostsService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    let userId = route.params['user_id'];
    let user = await this.usersService.getUser(userId);
    let microposts = await this.micropostsService.getMicropostsPage(user, 1);
    return { user: user, microposts: microposts };
  }
}
