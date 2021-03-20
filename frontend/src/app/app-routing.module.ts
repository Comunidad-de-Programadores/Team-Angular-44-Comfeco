import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'comunities',
        loadChildren: () => import('./comunities/comunities.module').then((m) => m.ComunitiesModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'policy',
        loadChildren: () => import('./policy/policy.module').then((m) => m.PolicyModule),
      },
      {
        path: 'coming-soon',
        loadChildren: () => import('./coming-soon/coming-soon.module').then((m) => m.ComingSoonModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: QuicklinkStrategy,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
