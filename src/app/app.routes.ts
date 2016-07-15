import { provideRouter, RouterConfig } from '@angular/router';
import { pagesRoutes } from './pages';
import {authRoutes, authProviders} from './auth';

export const routes: RouterConfig = [
  ...pagesRoutes,
  ...authRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  authProviders
];
