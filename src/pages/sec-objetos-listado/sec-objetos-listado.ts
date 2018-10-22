import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
import { HttpProvider } from '../../providers/http/http';
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

  usuarios : any[];

  name : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecObjetosListadoPage');
  }

  cargarUsuarios(){
    console.log('Entra Segunda Funcion');
    this.http.loadUsers().subscribe(
      (res) => {         
        this.usuarios = res['results'];
        //console.log(this.usuarios.toString());
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  /*checkName() {
 
    let data = {
        name: this.name
    };

    this.http.post('http://45.56.120.17:8080/checkname', data).pipe(
        map(res => res.json())
    ).subscribe(response => {
        console.log('POST Response:', response);
    });

    this.http.get('http://45.56.120.17:8080/checkname' + this.name).pipe(
        map(res => res.json())
    ).subscribe(response => {
        console.log('GET Response:', response);
    });

}*/
}
