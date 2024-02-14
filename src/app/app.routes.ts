import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { loggedInGuard } from './services/logged-in.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
    canActivate: [loggedInGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register-page/register-page.component').then(
        (c) => c.RegisterPageComponent
      ),
    canActivate: [loggedInGuard],
  },
  {
    path: 'account',
    title: 'Account',
    loadComponent: () =>
      import('./pages/account-page/account-page.component').then(
        (c) => c.AccountPageComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'playground',
    title: 'Playground',
    loadChildren: () =>
      import('./playground/playground.module').then(
        (c) => c.PlaygroundModule
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
