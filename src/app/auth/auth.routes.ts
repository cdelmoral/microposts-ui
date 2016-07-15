import { RouterConfig } from '@angular/router';
import {
  AuthGuard,
  AuthService,
  LoginComponent
} from './';

export const AuthRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [AuthGuard, AuthService];
