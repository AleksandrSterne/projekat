import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { PlaygroundNavbarComponent } from './components/playground-navbar/playground-navbar.component';

const playgroundRoutes: Routes = [
  {
    path: '',
    component: PlaygroundPageComponent,
    children: [
      {
        path: 'buttons',
        title: 'Buttons',
        loadComponent: () =>
          import(
            './pages/playground-buttons-page/playground-buttons-page.component'
          ).then((c) => c.PlaygroundButtonsPageComponent),
      },
      {
        path: 'date-inputs',
        title: 'Date inputs',
        loadComponent: () =>
          import(
            './pages/playground-date-inputs-page/playground-date-inputs-page.component'
          ).then((c) => c.PlaygroundDateInputsPageComponent),
      },
      {
        path: 'dropdowns',
        title: 'Dropdowns',
        loadComponent: () =>
          import(
            './pages/dropdowns-page/playground-dropdowns-page.component'
          ).then((c) => c.PlaygroundDropdownsPageComponent),
      },
      {
        path: 'grid',
        title: 'Grid',
        loadComponent: () =>
          import('./pages/grid-page/playground-grid-page.component').then(
            (c) => c.PlaygroundGridPageComponent
          ),
      },
      {
        path: 'inputs',
        title: 'Inputs',
        loadComponent: () =>
          import(
            './pages/playground-inputs-page/playground-inputs-page.component'
          ).then((c) => c.PlaygroundInputsPageComponent),
      },
    ],
  },
];

@NgModule({
  declarations: [PlaygroundPageComponent],
  imports: [RouterModule.forChild(playgroundRoutes), PlaygroundNavbarComponent],
  exports: [],
})
export class PlaygroundModule {}
