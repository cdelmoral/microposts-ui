import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ ],
  providers: [
    AuthGuardService,
    AuthService
  ]
})
export class AuthModule {}
