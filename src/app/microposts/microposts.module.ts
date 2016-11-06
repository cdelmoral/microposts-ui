import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MicropostsService } from './microposts.service';
import { NewMicropostComponent } from './new-micropost/new-micropost.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NewMicropostComponent
  ],
  declarations: [NewMicropostComponent],
  providers: [
    MicropostsService
  ]
})
export class MicropostsModule { }
