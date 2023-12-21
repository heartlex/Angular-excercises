import { Routes } from '@angular/router';

export const routes: Routes = [
  {
	path: 'ngTemplateOutletEx',
	loadChildren: () => import('./features/ngTemplateOutletEx/templates.module').then(
	  (m) => m.TemplatesModule,
	),
  },
];
