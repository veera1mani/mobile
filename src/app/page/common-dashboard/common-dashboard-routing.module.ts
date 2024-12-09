import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonDashboardPage } from './common-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CommonDashboardPage,
    children: [
      
      {
        path: 'common-page',
        loadChildren: () => import('../../page/common-page/common-page.module').then( m => m.CommonPagePageModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../../page/assets/assets.module').then( m => m.AssetsPageModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('../../page/offers/offers.module').then( m => m.OffersPageModule)
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
