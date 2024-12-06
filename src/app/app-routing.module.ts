import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },  
  {
    path: 'login-page',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'common-dashboard',
    loadChildren: () => import('./page/common-dashboard/common-dashboard.module').then(m => m.CommonDashboardPageModule)
  },
  {
    path: 'Authentication',
    loadChildren: () => import('./Authentication/authentication.module').then(m => m.AuthenticationModule)
  },  
  {
    path: 'set-pin',
    loadChildren: () => import('./page/set-pin/set-pin.module').then( m => m.SetPinPageModule)
  },
  {
    path: 'etraze-notification',
    loadChildren: () => import('./page/etraze-notification/etraze-notification.module').then( m => m.EtrazeNotificationPageModule)
  },
  {
    path: 'enter-pin',
    loadChildren: () => import('./page/enter-pin/enter-pin.module').then( m => m.EnterPinPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./page/scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[AuthService]
})
export class AppRoutingModule {}
