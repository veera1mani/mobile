import { Component, OnInit } from '@angular/core';
import { NavController, SearchbarInputEventDetail } from '@ionic/angular';
import { IonRefresherCustomEvent, IonSearchbarCustomEvent, RefresherEventDetail } from '@ionic/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.page.html',
  styleUrls: ['./assets.page.scss'],
})
export class AssetsPage implements OnInit {
  
  dataFetched: boolean = true;
  filteredOrderList: any;


  constructor(private auth: AuthService, private navCtrl: NavController ) { }

  ngOnInit() {
    console.log('inti assets');
    this.queryService('ALL');
  }

  queryService(sts: any) {
    this.auth.openSpinner();
    this.auth.queryService('assets').then((data: any) => {
      this.auth.closeSpinner();
      this.filteredOrderList = data;
    }).catch((err) =>{
      this.auth.closeSpinner();
      console.log(err);
    })
  }
    
  onSearch(event: any) {
    throw new Error('Method not implemented.');
  }
  
  backNav() {
    this.navCtrl.navigateBack('/common-dashboard/common-page');
  }

  ticketDetail(arg0: any,arg1: any) {
    throw new Error('Method not implemented.');
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.queryService('ALL');
      event.target.complete();
    }, 1500);
  }

}
