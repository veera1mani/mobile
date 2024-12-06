import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-dashboard',
  templateUrl: './common-dashboard.page.html',
  styleUrls: ['./common-dashboard.page.scss'],
})
export class CommonDashboardPage implements OnInit {
  selectedTab: string = 'home';
  userRole: any;
  user: any;
  
  constructor() {  
    
   }

  ngOnInit() {

     

  }

    onTabChange(tab: string) {
    this.selectedTab = tab;
  }

}
