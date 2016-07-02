import { provideRouter, RouterConfig } from '@angular/router';
import { PagesRoutes } from './pages'

export const routes: RouterConfig = [
  ...PagesRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];