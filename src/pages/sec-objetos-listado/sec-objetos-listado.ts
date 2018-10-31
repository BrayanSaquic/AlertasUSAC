import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
import { HttpClient } from "@angular/common/http";
//
//import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';

/**
 * Generated class for the SecObjetosListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-objetos-listado',
  templateUrl: 'sec-objetos-listado.html',
})
export class SecObjetosListadoPage {

  listado;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
    this.http.get("http://45.56.120.17/AlertasUsac/productos.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecObjetosListadoPage');
  }


}
