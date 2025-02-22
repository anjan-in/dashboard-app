import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '**', redirectTo: 'auth/login' }
];
