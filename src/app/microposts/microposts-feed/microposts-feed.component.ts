import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../users/user';
import { Micropost } from '../micropost';
import { MicropostsService } from '../microposts.service';

@Component({
  selector: 'mp-microposts-feed',
  templateUrl: './microposts-feed.component.html',
  styles: []
})
export class MicropostsFeedComponent implements OnInit {

  @Input()
  public user: User;

  public paginateConfig = { itemsPerPage: 10, currentPage: 1, totalItems: 0 };
  public microposts: Array<Micropost>;

  constructor(private micropostsService: MicropostsService) {}

  ngOnInit() {
    this.getMicropostsFeedPage(1);
  }

  public async getMicropostsFeedPage(page: number) {
    let data = await this.micropostsService.getMicropostsFeedPage(this.user, page);
    this.microposts = data.microposts;
    this.paginateConfig.totalItems = data.count;
    this.paginateConfig.currentPage = page;
  }
}
