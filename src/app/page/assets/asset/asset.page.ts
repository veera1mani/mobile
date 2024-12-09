import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage implements OnInit {
  invoise: any;
  invoiceDetails: any;
  orderDetail: any;
  status: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  backNav(){
    this.navCtrl.navigateBack('/common-dashboard/assets');
  }

}
