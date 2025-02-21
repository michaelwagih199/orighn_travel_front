import { Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './shared/layout/website-layout/website-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    providers: [
      // AdminService,
      // {provide: ADMIN_API_KEY, useValue: 12345},
    ],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/website/pages/home/home.component').then(
            (mod) => mod.HomScreenComponent
          ),
      },
    ]
  },
];
