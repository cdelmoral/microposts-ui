import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mp-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationControlsComponent {
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
}
