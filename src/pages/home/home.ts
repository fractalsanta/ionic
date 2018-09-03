import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage, Slides } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@IonicPage({
  segment: ':chart/:dateFilter'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides)
  slides: Slides;

  charts: string[] = ['1', '2', '3', '4', '5', '6'];
  selectedItem: any;
  isMobile: boolean;
  dateFilter: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    console.log(this.navParams);
    this.selectedItem = this.navParams.get('chart');
    this.dateFilter = this.navParams.get('dateFilter');

    if (platform.is('mobile')) {
      this.isMobile = true;
    }
  }

  public goToSlide(index: number) {
    this.slides.slideTo(index - 1, 500);
  }

  ionViewDidEnter() {
    this.goToSlide(this.selectedItem);
  }

  filterChart(item) {
    this.navCtrl.push(HomePage, { chart: item, dateFilter: this.dateFilter });
  }

  applyFilter(filterDate) {
    this.dateFilter = filterDate;
  }
}
