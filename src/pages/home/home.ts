import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { FilterPopOverPage } from '../../pages/filter-pop-over/filter-pop-over';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  charts: any[] = [
    { title: 'Top 5 Suburbs', view: 'Month', img: 'Top5.PNG' },
    { title: 'Rent Amount Collected', view: 'Month', img: 'RentAmountCollected.PNG' },
    { title: 'Management Fee', view: 'Month', img: 'ManagementFee.PNG' },
    { title: 'Other Agency Fee', view: 'Month', img: 'OtherAgencyFees.PNG' },
    { title: 'Gain/Lost', view: 'Month', img: 'Gained.PNG' }
  ];
  selectedItem: any;
  isMobile: boolean;

  @ViewChild('popoverContent', { read: ElementRef })
  content: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public popoverCtrl: PopoverController) {
    this.selectedItem = navParams.get('chart');
    if (platform.is('mobile')) {
      this.isMobile = true;
    }
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(FilterPopOverPage, {
      contentEle: this.content.nativeElement
    });

    popover.present({
      ev: ev
    });
  }

  filterChart(item) {
    // this.navCtrl.push(HomePage, { chart: item });
    this.selectedItem = item;
  }

  clearFilter() {
    this.selectedItem = null;
  }

  drillUp(item) {
    item.view = 'Year';
  }

  drillDown(item) {
    item.view = 'Month';
  }
}
