import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth';
import { UserModel } from '../users';

@Injectable()
export class MicropostsService {
  private micropostsUrl: string = 'https://angularjstutorial-staging.herokuapp.com/api/users';
  private options: RequestOptions =
    new RequestOptions({ headers: new Headers({ 'Content-Type' : 'application/json '}) });
  
  constructor(private http: Http, private authService: AuthService) {}
  
  public async createMicropost(userId: string, content: string) {
    let body = JSON.stringify({ content });
    let url = this.micropostsUrl + '/' + userId + '/microposts';
    
    try {
      let response = await this.http.post(url, body, this.options).toPromise();
      this.authService.currentUser = new UserModel(response.json());
      return this.authService.currentUser;;
    } catch(e) {
      throw e;
    }
  }
}
