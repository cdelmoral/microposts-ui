import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { Micropost } from '../../microposts/micropost';
import { MicropostsService } from '../../microposts/microposts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'mp-user-show',
  templateUrl: './user-show.component.html',
  styles: []
})
export class UserShowComponent implements OnInit {

  public user: User;
  public microposts: Array<Micropost>;
  public pageControls = { currentPage: 1, itemsPerPage: 10, totalItems: 0 };

  constructor(private route: ActivatedRoute, private micropostsService: MicropostsService, private usersService: UsersService) { }

  async ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.user = data.info.user;
      this.microposts = data.info.microposts.microposts;
      this.pageControls.totalItems = data.info.microposts.count;
    });
  }

  public async getMicropostsPage(page: number) {
    let data = await this.micropostsService.getMicropostsPage(this.user, page);
    this.microposts = data.microposts;
    this.pageControls.totalItems = data.count;
    this.pageControls.currentPage = page;
  }
}
