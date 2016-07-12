import { RouterConfig } from '@angular/router';
import {
  HomeComponent,
  HelpComponent,
  AboutComponent,
  ContactComponent
} from './';

export const PagesRoutes: RouterConfig = [
  { path: '', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
