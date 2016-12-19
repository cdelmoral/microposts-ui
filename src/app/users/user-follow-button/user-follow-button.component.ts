import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {AuthService} from '../../auth/auth.service';
import {UsersService} from '../users.service';

@Component({
    selector: 'mp-user-follow-button',
    templateUrl: './user-follow-button.component.html',
    styles: []
})
export class UserFollowButtonComponent implements OnInit {

    @Input()
    public user: User;

    public followLabel: string;

    public isFollowing: boolean;

    constructor(private authService: AuthService, private usersService: UsersService) { }

    async ngOnInit() {
        this.isFollowing =
            await this.usersService.isFollowing(this.authService.currentUser.id, this.user.id);
        this.followLabel = this.isFollowing ? 'Unfollow' : 'Follow';
    }

    public async onSubmit() {
        try {
            if (this.isFollowing) {
                await this.usersService.unfollow(this.user.id);
                this.user.followersCount--;
            } else {
                await this.usersService.follow(this.user.id);
                this.user.followersCount++;
            }

            this.isFollowing = !this.isFollowing;
            this.followLabel = this.isFollowing ? 'Unfollow' : 'Follow';
        } catch (e) {
            throw e;
        }
    }

}
