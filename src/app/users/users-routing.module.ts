import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersIndexComponent } from './users-index/users-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UsersIndexComponent, canActivate: [AuthGuardService] },
      { path: 'signup', component: UserNewComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
