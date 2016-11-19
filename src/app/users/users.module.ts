import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
