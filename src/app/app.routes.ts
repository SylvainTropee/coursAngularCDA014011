import { Routes } from '@angular/router';
import {Mod5home} from './mod5/mod5home/mod5home';
import {Mod5about} from './mod5/mod5about/mod5about';
import {Mod5detail} from './mod5/mod5detail/mod5detail';

export const routes: Routes = [
  {path : '', component : Mod5home},
  {path : 'about', component : Mod5about},
  {path : 'detail/:id', component : Mod5detail},
];
