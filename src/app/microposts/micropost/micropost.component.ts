import { Component, Input } from '@angular/core';

import { Micropost } from '../micropost';

@Component({
  selector: 'mp-micropost',
  templateUrl: './micropost.component.html',
  styles: []
})
export class MicropostComponent {

  @Input()
  public micropost: Micropost;

}
