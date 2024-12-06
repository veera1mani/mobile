import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonDashboardPage } from './common-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CommonDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-bottom-navi/home-bottom-navi.module').then( m => m.HomeBottomNaviPageModule)
      },
      {
        path: 'common-page',
        loadChildren: () => import('../../page/common-page/common-page.module').then( m => m.CommonPagePageModule)
      },
      {
        path: '',
        redirectTo: '/common-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/common-dashboard/common-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonDashboardPageRoutingModule {}
