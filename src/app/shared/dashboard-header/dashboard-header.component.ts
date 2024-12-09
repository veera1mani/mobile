import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {

  logoutModel = false;

  constructor(private router: Router, private navctrl: NavController, private auth: AuthService) { }

  ngOnInit() {
    this.logoutModel = false;
  }



  openModel() {
    this.logoutModel = true;
  }

  closeModel() {
    this.logoutModel = false;
  }


  /**
   * 
   */

  logout() {
    this.navctrl.navigateRoot('/scan-qr');
  }


  /**
   * 
   */
  openNotification() {
    this.router.navigateByUrl("/etraze-notification");
  }
}
