import { RouterConfig } from '@angular/router';

import {LoginComponent} from './login';

export const AUTH_ROUTES: RouterConfig = [
  { path: 'login', component: LoginComponent }
];
