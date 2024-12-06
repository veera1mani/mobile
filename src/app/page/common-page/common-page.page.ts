import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.page.html',
  styleUrls: ['./common-page.page.scss'],
})
export class CommonPagePage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('/scan-qr');
  }
}
