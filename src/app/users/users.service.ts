import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { AuthService } from '../auth/auth.service';
import { User } from '../users/user';

@Injectable()
export class UsersService {
    private usersUrl: string = environment.serverUrl + '/users';
    private options: RequestOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type' : 'application/json '}),
        withCredentials: true
    });

    constructor(private http: Http, private authService: AuthService) {}

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
            let response = await this.http.post(url, {}, this.options).toPromise();
        } catch (e) {
            throw e;
        }
    }

    public async unfollow(followingId: string) {
        let url = this.usersUrl + '/' + followingId + '/unfollow';

        try {
            let response = await this.http.delete(url, this.options).toPromise();
        } catch (e) {
            throw e;
        }
    }

}
