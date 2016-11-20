import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'mp-users-index',
  templateUrl: './users-index.component.html',
  styles: []
})
export class UsersIndexComponent implements OnInit {

  public users: User[];
  public paginateConfig = { itemsPerPage: 10, currentPage: 1, totalItems: 0 };

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsersPage(this.paginateConfig.currentPage);
  }

  public async getUsersPage(newPageNumber) {
    console.log(newPageNumber);
    this.paginateConfig.currentPage = newPageNumber;

    let currentPage = this.paginateConfig.currentPage;
    let itemsPerPage = this.paginateConfig.itemsPerPage;
    let response = await this.usersService.getPage(currentPage, itemsPerPage);
    this.users = response.users;
    this.paginateConfig.totalItems = response.count;
  }
}
