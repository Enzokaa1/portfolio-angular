import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Projetos } from './projetos/projetos';
import { Contato } from './contato/contato';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'projetos', component: Projetos },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];
