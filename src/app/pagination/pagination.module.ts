import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2PaginationModule } from 'ng2-pagination';
import { PaginatePipe } from 'ng2-pagination';

import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2PaginationModule
  ],
  exports: [PaginationControlsComponent, PaginatePipe],
  declarations: [PaginationControlsComponent]
})
export class PaginationModule { }
