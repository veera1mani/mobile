import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.page.html',
  styleUrls: ['./common-page.page.scss'],
})
export class CommonPagePage implements OnInit {
  
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: 'line',
      },
    ],
    title: {
      text: '' ,
    },
  };
  Pollutant: any;

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.Pollutant = {
      label: { enabled: false },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020',
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },
      
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      series: [
        {
          name: 'Installation & Developers',
          data: [
            43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
            161454, 154610,
          ],
        },
        {
          name: 'Other',
          data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
            10073,
          ],
        },
      ],
      title: {
        value:''
       },
      credits:{
        enabled:false
      },

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },            
          },
        ],
      },
    };
  }

  back(){
    this.navCtrl.navigateBack('/scan-qr');
  }
}
