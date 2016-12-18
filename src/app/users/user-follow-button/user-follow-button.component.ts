import {Component, Input} from '@angular/core';
import {User} from '../user';

@Component({
    selector: 'mp-user-follow-button',
    templateUrl: './user-follow-button.component.html',
    styles: []
})
export class UserFollowButtonComponent {

    @Input()
    public user: User;

    public isFollowing: boolean;

    constructor() { this.isFollowing = false; }

    public async onSubmit() {
        this.isFollowing = !this.isFollowing;
    }

}
