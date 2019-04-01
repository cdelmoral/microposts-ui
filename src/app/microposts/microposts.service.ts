import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { Micropost } from './micropost';
import { AuthService } from '../auth/auth.service';
import { User } from '../users/user';

@Injectable()
export class MicropostsService {
    private micropostsUrl: string = environment.serverUrl + '/users';
    private options: RequestOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type' : 'application/json '}),
        withCredentials: true
    });

    private static createMicropostsArray(responseMicroposts: any, user: User): Array<Micropost> {
        let microposts = [];
        for (let micropost of responseMicroposts) {
            micropost.user_name = micropost.user_id.name;
            micropost.user_id = micropost.user_id.id;
            micropost.gravatar_id = micropost.user_id.gravatar_id;
            microposts.push(new Micropost(micropost));
        }
        return microposts;
    }

    constructor(private http: Http, private authService: AuthService) {}

    public async createMicropost(userId: string, content: string) {
        let body = JSON.stringify({ content });
        let url = this.micropostsUrl + '/' + userId + '/microposts';

        try {
            let response = await this.http.post(url, body, this.options).toPromise();
            // TODO: return User but do not setup the current user
            this.authService.currentUser = new User(response.json());
            return this.authService.currentUser;
        } catch (e) {
            throw e;
        }
    }

    public async getMicropostsFeedPage(user: User, page: number) {
        let url = environment.serverUrl + '/microposts/feed/' + user.id + '?pageNumber=' +
            page + '&itemsPerPage=' + 10;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let responseJson = response.json();
            let microposts = MicropostsService.createMicropostsArray(responseJson.microposts, user);
            return { count: responseJson.count, microposts: microposts };
        } catch (e) {
            throw e;
        }
    }

    public async getMicropostsPage(user: User, page: number) {
        let url = environment.serverUrl + '/microposts/user_page/' + user.id + '?pageNumber=' + page +
            '&itemsPerPage=' + 10;

        try {
            let response = await this.http.get(url, this.options).toPromise();
            let responseJson = response.json();
            let microposts = MicropostsService.createMicropostsArray(responseJson.microposts, user);
            return { count: responseJson.count, microposts: microposts };
        } catch (e) {
            throw e;
        }
    }

    public async deleteMicropost(userId: string, micropostId: string) {
        let url = environment.serverUrl + '/users/' + userId + '/microposts/' + micropostId;

        try {
            await this.http.delete(url, this.options).toPromise();
        } catch (e) {
            throw e;
        }
    }
}
