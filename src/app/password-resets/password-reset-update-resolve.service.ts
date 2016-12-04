import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { PasswordResetsService } from './password-resets.service';

@Injectable()
export class PasswordResetUpdateResolve implements Resolve<any> {

  constructor(private passwordResetsService: PasswordResetsService, private router: Router) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    let userId = route.params['user_id'];
    let token = route.params['token'];

    let valid = await this.passwordResetsService.validateToken(userId, token);

    return { valid: valid, user: { id: userId, token: token } };
  }
}
