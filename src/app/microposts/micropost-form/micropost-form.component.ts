import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../../users/';
import { MicropostsService } from '../microposts.service';

@Component({
  moduleId: module.id,
  selector: 'mp-micropost-form',
  templateUrl: 'micropost-form.component.html',
  styleUrls: ['micropost-form.component.css']
})
export class MicropostFormComponent {
  
  @Input()
  public userId: string;
  
  public micropostForm: MicropostForm;
  
  constructor(private micropostsService: MicropostsService, private router: Router) {
    this.micropostForm = new MicropostForm();
  }
  
  public async onSubmit() {
    try {
      let microposts = await this.micropostsService.createMicropost(this.userId, this.micropostForm.content);
      this.router.navigate(['/home']);
    } catch(e) {
      console.log(e);
    }
  }
}

class MicropostForm {
  public content: string;
}
