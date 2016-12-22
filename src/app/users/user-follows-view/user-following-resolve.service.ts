import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {UsersService} from '../users.service';

@Injectable()
export class UserFollowingResolveService implements Resolve<any> {

    constructor(private usersService: UsersService) { }

    async resolve(route: ActivatedRouteSnapshot) {
        let userId: string = route.params['user_id'];

        let user = await this.usersService.getUser(userId);
        let allUsers = await this.usersService.getAllFollowing(userId);
        let data = await this.usersService.getFollowing(userId, 1, 10);

        return { users: data.following, count: data.count, user: user, allUsers: allUsers };
    }
}
