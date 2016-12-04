import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PasswordResetFormComponent } from './password-reset-form/password-reset-form.component';
import { PasswordResetCreateComponent }
  from './password-reset-create/password-reset-create.component';
import { PasswordResetUpdateResolve } from './password-reset-update-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'password_reset', component: PasswordResetCreateComponent },
      {
        path: 'password_resets/:user_id/:token',
        component: PasswordResetFormComponent,
        resolve: { result: PasswordResetUpdateResolve }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PasswordResetsRoutingModule {}
