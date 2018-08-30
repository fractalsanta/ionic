import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  charts: string[] = ['Chart 1', 'Chart 2', 'Chart 3', 'Chart 4', 'Chart 5', 'Chart 6'];
  selectedItem: any;
  isMobile: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.selectedItem = navParams.get('chart');
    if (platform.is('mobile')) {
      this.isMobile = true;
    }
  }

  filterChart(item) {
    this.navCtrl.push(HomePage, { chart: item });
  }
}
