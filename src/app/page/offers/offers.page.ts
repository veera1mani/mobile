import { Component, OnInit } from '@angular/core';
import { NavController, SearchbarInputEventDetail } from '@ionic/angular';
import { IonRefresherCustomEvent, IonSearchbarCustomEvent, RefresherEventDetail } from '@ionic/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {


  dataFetched: any; 
  filteredOrderList: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ticketDetail(arg0: any,arg1: any) {
    throw new Error('Method not implemented.');
  }
  handleRefresh($event: IonRefresherCustomEvent<RefresherEventDetail>) {
    throw new Error('Method not implemented.');
  }
  queryService(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onSearch($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    throw new Error('Method not implemented.');
  }
  backNav() {
    this.navCtrl.navigateBack('/common-dashboard/common-page');
  }

}
