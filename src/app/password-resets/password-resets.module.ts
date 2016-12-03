import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordResetsRoutingModule } from './password-resets-routing.module';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { PasswordResetCreateComponent } from './password-reset-create/password-reset-create.component';

@NgModule({
  imports: [
    CommonModule,
    PasswordResetsRoutingModule
  ],
  declarations: [PasswordResetFormComponent, PasswordResetCreateComponent]
})
export class PasswordResetsModule { }
