import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from '../pagination/pagination.module';
import { AuthModule } from '../auth/auth.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { UserActivationResolve } from './user-activation-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    UsersRoutingModule,
    PaginationModule
  ],
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent,
    UsersIndexComponent,
    UserNewComponent,
    UserActivationComponent
  ],
  providers: [
    UsersService,
    UserActivationResolve
  ]
})
export class UsersModule { }
