import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../users/user';
import { MicropostsService } from '../microposts.service';

@Component({
  selector: 'mp-new-micropost',
  templateUrl: './new-micropost.component.html',
  styles: []
})
export class NewMicropostComponent {

  @Input()
  public userId: string;

  public micropostContent: string;

  constructor(private micropostsService: MicropostsService, private router: Router) { }

  public async onSubmit() {
    try {
      let microposts =
        await this.micropostsService.createMicropost(this.userId, this.micropostContent);
      this.router.navigate(['/home']);
    } catch(e) {
      console.log(e);
    }
  }
}
