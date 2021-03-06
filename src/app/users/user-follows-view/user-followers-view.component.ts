import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
    selector: 'mp-user-followers-view',
    templateUrl: 'user-follows-view.component.html',
    styles: []
})
export class UserFollowersViewComponent implements OnInit {

    public user: User;
    public allUsers: Array<User>;
    public users: Array<User>;
    public pageControls = { itemsPerPage: 10, currentPage: 1, totalItems: 0 };

    constructor(private route: ActivatedRoute, private usersService: UsersService) {}

    async ngOnInit() {
        this.route.data.subscribe((resolve: any) => {
            this.user = resolve.data.user;
            this.allUsers = resolve.data.allUsers;
            this.users = resolve.data.users;
            this.pageControls.totalItems = resolve.data.count;
        });
    }

    public async getUsersPage(page: number) {
        let data =
            await this.usersService.getFollowers(this.user.id, page, this.pageControls.itemsPerPage);
        this.users = data.followers;
        this.pageControls.totalItems = data.count;
        this.pageControls.currentPage = page;
    }

}
