import { RouterConfig } from '@angular/router';

import { HomeComponent, HelpComponent, AboutComponent, ContactComponent } from './';

export const PAGES_ROUTES: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', redirectTo: '/home' } // TODO: remove sign-up holder
];
