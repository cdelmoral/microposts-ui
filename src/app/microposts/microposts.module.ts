import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaginationModule } from '../pagination/pagination.module';
import { MicropostsService } from './microposts.service';
import { NewMicropostComponent } from './new-micropost/new-micropost.component';
import { MicropostsFeedComponent } from './microposts-feed/microposts-feed.component';
import { MicropostComponent } from './micropost/micropost.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ],
  exports: [
    NewMicropostComponent,
    MicropostsFeedComponent,
    MicropostComponent
  ],
  declarations: [
    NewMicropostComponent,
    MicropostsFeedComponent,
    MicropostComponent
  ],
  providers: [
    MicropostsService
  ]
})
export class MicropostsModule { }
