import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ObjPerdidosPage } from '../pages/obj-perdidos/obj-perdidos';
import { ObjVehiculosPage } from '../pages/obj-vehiculos/obj-vehiculos';
import { AlertasClasePage } from '../pages/alertas-clase/alertas-clase';
//
import { SecObjetosListadoPage } from '../pages/sec-objetos-listado/sec-objetos-listado';
import { SecObjetosIngresoPage } from '../pages/sec-objetos-ingreso/sec-objetos-ingreso';
//
import { SecClaseListadoPage } from '../pages/sec-clase-listado/sec-clase-listado';
import { SecClaseCrearCodigoPage } from '../pages/sec-clase-crear-codigo/sec-clase-crear-codigo';
import { SecClaseAsigCodigoPage } from '../pages/sec-clase-asig-codigo/sec-clase-asig-codigo';
import { SecClaseIngresoPage } from '../pages/sec-clase-ingreso/sec-clase-ingreso';
//
import { TabsPage } from '../pages/tabs/tabs';
//
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ObjPerdidosPage,
    ObjVehiculosPage,
    AlertasClasePage,
    SecObjetosListadoPage,
    SecObjetosIngresoPage,
    SecClaseListadoPage,
    SecClaseCrearCodigoPage,
    SecClaseAsigCodigoPage,
    SecClaseIngresoPage,
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
    SecObjetosListadoPage,
    SecObjetosIngresoPage,
    SecClaseListadoPage,
    SecClaseCrearCodigoPage,
    SecClaseAsigCodigoPage,
    SecClaseIngresoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
