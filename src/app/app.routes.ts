import { Routes } from '@angular/router';
import {Accueil} from './accueil/accueil';
import {Liste} from './liste/liste';
import {Gestion} from './gestion/gestion';
import {Page404} from './page404/page404';

export const routes: Routes = [
  {path: '', component: Accueil},
  {path: 'accueil', component: Accueil},
  {path: 'liste', component: Liste},
  {path: 'gestion', component: Gestion},
  {path: 'page404', component: Page404},
  {path: '**', redirectTo: 'page404'}
];
