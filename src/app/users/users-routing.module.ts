import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersIndexComponent } from './users-index/users-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { UserActivationResolve } from './user-activation/user-activation-resolve.service';
import { UserResolve } from './user-show/user-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UsersIndexComponent, canActivate: [AuthGuardService] },
      { path: 'signup', component: UserNewComponent },
      { path: 'users/:user_id', component: UserShowComponent, resolve: { info: UserResolve } },
      {
        path: 'activate/:user_id/:token',
        component: UserActivationComponent,
        resolve: { activated: UserActivationResolve }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
