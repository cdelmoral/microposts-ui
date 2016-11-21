import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from '../pagination/pagination.module';
import { AuthModule } from '../auth/auth.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';
import { UsersIndexComponent } from './users-index/users-index.component';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    UsersRoutingModule,
    PaginationModule
  ],
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent,
    UsersIndexComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
