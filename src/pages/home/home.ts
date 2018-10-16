import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /*launchObjPage(){
    this.navCtrl.push(ObjPage);
  }
  <button ion-button block (click)="launchObjPage()">Block Button</button>*/
}
