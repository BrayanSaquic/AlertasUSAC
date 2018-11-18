import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { LogueoAplicativoPage } from '../logueo-aplicativo/logueo-aplicativo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController) {  
    this.tabBarElement = document.querySelector('.tabbar');
  }


  launcRegistroPage(){

    this.navCtrl.push(RegistroUsuarioPage);
  }

  launcLogueoPage(){

    this.navCtrl.push(LogueoAplicativoPage);
  }
  logOutPage(){

    this.navCtrl.popToRoot();
  }

  ionViewWillEnter() {   
     
    this.tabBarElement.style.display = 'none';
  }



 /*
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
*/
}
