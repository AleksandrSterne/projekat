import { Routes } from '@angular/router';

export const playgroundRoutes: Routes = [
  {
    path: 'playground',
    title: 'Playground',
    loadComponent: () =>
      import('./pages/playground-page/playground-page.component').then(
        (c) => c.PlaygroundPageComponent
      ),
    children: [
      {
        path: 'buttons',
        title: 'Buttons',
        loadComponent: () =>
          import('./pages/buttons-page/buttons-page.component').then(
            (c) => c.ButtonsPageComponent
          ),
      },
      {
        path: 'date-inputs',
        title: 'Date inputs',
        loadComponent: () =>
          import('./pages/date-inputs-page/date-inputs-page.component').then(
            (c) => c.DateInputsPageComponent
          ),
      },
      {
        path: 'dropdowns',
        title: 'Dropdowns',
        loadComponent: () =>
          import('./pages/dropdowns-page/dropdowns-page.component').then(
            (c) => c.DropdownsPageComponent
          ),
      },
      {
        path: 'grid',
        title: 'Grid',
        loadComponent: () =>
          import('./pages/grid-page/grid-page.component').then(
            (c) => c.GridPageComponent
          ),
      },
      {
        path: 'inputs',
        title: 'Inputs',
        loadComponent: () =>
          import('./pages/inputs-page/inputs-page.component').then(
            (c) => c.InputsPageComponent
          ),
      },
    ],
  },
];
