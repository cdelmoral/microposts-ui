import { provideRouter, RouterConfig } from '@angular/router';
import { PAGES_ROUTES } from './pages';
import { AUTH_ROUTES } from './auth';

export const routes: RouterConfig = [
  ...PAGES_ROUTES,
  ...AUTH_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
