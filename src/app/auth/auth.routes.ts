import { RouterConfig } from '@angular/router';
import {
  AuthGuard,
  AuthService
} from './';
import {LoginComponent} from './login';

export const authRoutes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];

export const authProviders = [AuthGuard, AuthService];
