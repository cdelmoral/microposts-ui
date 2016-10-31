import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../users/user';

@Injectable()
export class AuthService {

  public currentUser: User;
  public isLoggedIn: boolean = false;

  private loginUrl: string = 'https://angularjstutorial-staging.herokuapp.com/api/sessions';
  private options: RequestOptions =
    new RequestOptions({ headers: new Headers({ 'Content-Type' : 'application/json '}) });

  constructor (private http: Http) {}

  public async login(email: String, password: String): Promise<User> {
    let body = JSON.stringify({ email, password });

    try {
      let response = await this.http.post(this.loginUrl, body, this.options).toPromise();
      this.isLoggedIn = true;
      this.currentUser = new User(response.json());
      return this.currentUser;;
    } catch(e) {
      throw e;
    }
  }

  public async logout(): Promise<Object> {
    try {
      let response = await this.http.delete(this.loginUrl + '/logout').toPromise();
      this.isLoggedIn = false;
      this.currentUser = null;
      return response;
    } catch(e) {
      throw e;
    }
  }
}
