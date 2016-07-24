import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private loginUrl: string = 'https://angularjstutorial-staging.herokuapp.com/api/sessions';
  
  isLoggedIn: boolean = false;
  
  constructor (private http: Http) {}
  
  public async login(email: String, password: String): Promise<Object> {
    let body = JSON.stringify({ email, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    try {
      let response = await this.http.post(this.loginUrl, body, options).toPromise();
      this.isLoggedIn = true;
      let bodyResponse = response.json();
      return bodyResponse;
    } catch(e) {
      throw e;
    }
  }
  
  public logout() {
    this.isLoggedIn = false;
  }
}
