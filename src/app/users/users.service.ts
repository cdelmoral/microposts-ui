import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { User } from './user';

@Injectable()
export class UsersService {
    private usersUrl: string = environment.serverUrl + '/users';
    private options: RequestOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type' : 'application/json '}),
        withCredentials: true
    });

    constructor(private http: Http) {}

    public async getUser(userId: string) {
        let url = this.usersUrl + '/' + userId;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            return new User(response.json());
        } catch (e) {
            throw e;
        }
    }

    public async getPage(page: number, items: number) {
        let url = this.usersUrl + '/index_page?pageNumber=' + page + '&usersPerPage=' + items;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    public async getFollowers(userId: string, page: number, items: number) {
        let url = this.usersUrl + '/' + userId + '/followers?page=' + page + '&limit=' + items;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let data = response.json();
            let users = data.followers.map(function(user) {
                return new User(user);
            });
            return {followers: users, count: data.count};
        } catch (e) {
            throw e;
        }
    }

    public async getAllFollowers(userId: string): Promise<Array<User>> {
        let url = this.usersUrl + '/' + userId + '/all_followers';

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let data = response.json();
            let users = data.followers.map(function(user) {
                return new User(user);
            });
            return users;
        } catch (e) {
            throw e;
        }
    }

    public async getFollowing(userId: string, page: number, items: number) {
        let url = this.usersUrl + '/' + userId + '/following?page=' + page + '&limit=' + items;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let data = response.json();
            let users = data.following.map(function(user) {
                return new User(user);
            });
            return {following: users, count: data.count};
        } catch (e) {
            throw e;
        }
    }

    public async getAllFollowing(userId: string): Promise<Array<User>> {
        let url = this.usersUrl + '/' + userId + '/all_following';

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let data = response.json();
            let users = data.following.map(function(user) {
                return new User(user);
            });
            return users;
        } catch (e) {
            throw e;
        }
    }

    public async createUser(user: any) {
        let body = JSON.stringify(user);

        try {
            let response = await this.http.post(this.usersUrl, body, this.options).toPromise();
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    public async activateUser(userId: string, token: string): Promise<boolean> {
        let url = this.usersUrl + '/activate/' + userId + '/' + token;
        let data;

        try {
            let response = await this.http.put(url, {}, this.options).toPromise();
            data = response.json();
        } catch (e) {
            throw e;
        }

        return data && data.user;
    }

    public async isFollowing(followerId: string, followingId: string) {
        let url = this.usersUrl + '/' + followerId + '/is_following/' + followingId;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let data = response.json();
            return data.is_following;
        } catch (e) {
            throw e;
        }
    }

    public async follow(followingId: string) {
        let url = this.usersUrl + '/' + followingId + '/follow';

        try {
            await this.http.post(url, {}, this.options).toPromise();
        } catch (e) {
            throw e;
        }
    }

    public async unfollow(followingId: string) {
        let url = this.usersUrl + '/' + followingId + '/unfollow';

        try {
            await this.http.delete(url, this.options).toPromise();
        } catch (e) {
            throw e;
        }
    }

}
