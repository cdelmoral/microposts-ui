import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'mp-user-activation',
  template: '',
  styles: []
})
export class UserActivationComponent implements OnInit {

  private activated: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flashService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { activated: boolean }) => {
      if (data.activated) {
        this.flashService.show('The account has been activated.', {timeout: 5000, cssClass: 'alert-success'});
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/signup']);
      }
    });
  }

}
