import { provideRouter, RouterConfig } from '@angular/router';
import { PagesRoutes } from './pages';
// import {AuthRoutes, authProviders} from './auth';

export const routes: RouterConfig = [
  ...PagesRoutes,
  // ...AuthRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  // authProviders
];
