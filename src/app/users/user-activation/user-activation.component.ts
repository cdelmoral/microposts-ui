import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mp-user-activation',
  template: '',
  styles: []
})
export class UserActivationComponent implements OnInit {

  private activated: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: { activated: boolean }) => {
      if (data.activated) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/signup']);
      }
    });
  }

}
