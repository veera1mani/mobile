import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonPagePageRoutingModule } from './common-page-routing.module';

import { CommonPagePage } from './common-page.page';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonPagePageRoutingModule,
    HighchartsChartModule
  ],
  declarations: [CommonPagePage]
})
export class CommonPagePageModule {}
