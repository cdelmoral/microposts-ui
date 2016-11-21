import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersIndexComponent } from './users-index/users-index.component';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UsersIndexComponent, canActivate: [AuthGuardService] }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
