import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class PasswordResetsService {
  private passwordResetsUrl: string = environment.serverUrl + '/password_resets';
  private options: RequestOptions = new RequestOptions({
    headers: new Headers({ 'Content-Type' : 'application/json '}),
    withCredentials: true
  });

  constructor(private http: Http) {}

  public async createPasswordReset(userEmail: string) {
    let body = JSON.stringify({ email: userEmail });
    let url = this.passwordResetsUrl;

    try {
      let response = await this.http.post(url, body, this.options).toPromise();
      let responseJson = response.json();
      return responseJson.message;
    } catch(e) {
      throw new Error(e._body);
    }
  }

  public async updatePassword(userId: string, token: string, newPassword: string) {
    let body = JSON.stringify({ password: newPassword });
    let url = this.passwordResetsUrl + '/' + userId + '/' + token;

    try {
      let response = await this.http.put(url, body, this.options).toPromise();
      let responseJson = response.json();
      return responseJson.message;
    } catch(e) {
      throw new Error(e._body);
    }
  }

  public async validateToken(userId: string, token: string): Promise<boolean> {
    let url = this.passwordResetsUrl + '/valid_token?id=' + userId + '&token=' + token;

    let response;
    try {
      response = await this.http.get(url, this.options).toPromise();
    } catch(e) {
      return false;
    }

    return response.status === 200;
  }
}
