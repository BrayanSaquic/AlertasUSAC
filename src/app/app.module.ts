import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
//Tabs
import { ObjPerdidosPage } from '../pages/obj-perdidos/obj-perdidos';
import { ObjVehiculosPage } from '../pages/obj-vehiculos/obj-vehiculos';
import { AlertasClasePage } from '../pages/alertas-clase/alertas-clase';

//Paginas
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { LogueoAplicativoPage } from '../pages/logueo-aplicativo/logueo-aplicativo';

import { SecVehiculoIngresoPage } from '../pages/sec-vehiculo-ingreso/sec-vehiculo-ingreso';
import { SecVehiculoListadoPage } from '../pages/sec-vehiculo-listado/sec-vehiculo-listado';
import { SecVehiculoRegistroPage } from '../pages/sec-vehiculo-registro/sec-vehiculo-registro';

//otros
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ObjPerdidosPage,
    ObjVehiculosPage,
    AlertasClasePage,
    RegistroUsuarioPage,
    LogueoAplicativoPage,
    SecVehiculoIngresoPage,
    SecVehiculoListadoPage,
    SecVehiculoRegistroPage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ObjPerdidosPage,
    ObjVehiculosPage,
    AlertasClasePage,
    RegistroUsuarioPage,
    LogueoAplicativoPage,
    SecVehiculoIngresoPage,
    SecVehiculoListadoPage,
    SecVehiculoRegistroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
