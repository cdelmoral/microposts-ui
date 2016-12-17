import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

import { User } from '../users/user';

@Injectable()
export class AuthService {

    public currentUser: User;

    private loginUrl: string = environment.serverUrl + '/sessions';
    private options: RequestOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type' : 'application/json '}),
        withCredentials: true
    });

    constructor (private http: Http) {}

    public isLoggedIn(): boolean {
        return this.currentUser !== null;
    }

    public isCurrentUser(userId): boolean {
        return this.currentUser.id === userId;
    }

    public async checkSession(): Promise<void> {
        if (this.currentUser === undefined) {
            try {
                let response =
                    await this.http.get(this.loginUrl + '/authenticated', this.options).toPromise();
                if (response.json().authenticated === false) {
                    this.currentUser = null;
                } else {
                    this.currentUser = new User(response.json());
                }
            } catch  (e) {
                throw e;
            }
        }
    }

    public async login(email: String, password: String): Promise<User> {
        let body = JSON.stringify({email, password});

        try {
            let response = await this.http.post(this.loginUrl, body, this.options).toPromise();
            this.currentUser = new User(response.json());
            return this.currentUser;
        } catch (e) {
            throw new Error(e._body);
        }
    }

    public async logout(): Promise<Object> {
        try {
            let response = await this.http.delete(this.loginUrl + '/logout', this.options).toPromise();
            this.currentUser = null;
            return response;
        } catch (e) {
            throw e;
        }
    }
}
