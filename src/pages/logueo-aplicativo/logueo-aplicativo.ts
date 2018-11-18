import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogueoAplicativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logueo-aplicativo',
  templateUrl: 'logueo-aplicativo.html',
})
export class LogueoAplicativoPage {

  user: string;
  pass: string;
  isLogged: boolean;
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogueoAplicativoPage');
  }

  signUp(){
    
    console.log(this.pass);
    console.log(this.user);
    
    if(this.pass=="admin" && this.user=="admin")
    {
    // this.navCtrl.push(LogueadoPage); 
    this.tabBarElement.style.display = 'flex';
      
    }

  }
}
