import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PasswordResetsRoutingModule } from './password-resets-routing.module';
import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { PasswordResetCreateComponent } from './password-reset-create/password-reset-create.component';
import { PasswordResetsService } from './password-resets.service';

@NgModule({
  imports: [
    CommonModule,
    PasswordResetsRoutingModule,
    FormsModule
  ],
  declarations: [PasswordResetFormComponent, PasswordResetCreateComponent],
  providers: [PasswordResetsService]
})
export class PasswordResetsModule { }
