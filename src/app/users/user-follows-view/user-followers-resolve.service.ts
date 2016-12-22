import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {UsersService} from '../users.service';

@Injectable()
export class UserFollowersResolveService implements Resolve<any> {

    constructor(private usersService: UsersService) { }

    async resolve(route: ActivatedRouteSnapshot) {
        let userId: string = route.params['user_id'];

        let user = await this.usersService.getUser(userId);
        let data = await this.usersService.getFollowers(userId, 1, 10);
        let allUsers = await this.usersService.getAllFollowers(userId);

        return { users: data.followers, count: data.count, user: user, allUsers: allUsers };
    }
}
