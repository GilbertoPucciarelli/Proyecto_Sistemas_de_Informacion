import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { HomeComponent } from './view/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './view/login/login.component';
import { NavigationLoginComponent } from './navigation/navigation-login/navigation-login.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import { MenuComponent } from './view/menu/menu.component';
import { NavigationOrdenComponent } from './navigation/navigation-orden/navigation-orden.component';
import { OrdenComponent } from './view/orden/orden.component';
import { NavigationComprarComponent } from './navigation/navigation-comprar/navigation-comprar.component';
import { ComprarComponent } from './view/comprar/comprar.component';
import { NavigationSalirComponent } from './navigation/navigation-salir/navigation-salir.component';
import { SalirComponent } from './view/salir/salir.component';
import { GestionarComponent } from './view/gestionar/gestionar.component';
import { NavigationGestionarComponent } from './navigation/navigation-gestionar/navigation-gestionar.component';
import { NavigationAdministradorComponent } from './navigation/navigation-administrador/navigation-administrador.component';
import { AdministradorComponent } from './view/administrador/administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    NavigationLoginComponent,
    NavigationMenuComponent,
    MenuComponent,
    NavigationOrdenComponent,
    OrdenComponent,
    NavigationComprarComponent,
    ComprarComponent,
    NavigationSalirComponent,
    SalirComponent,
    NavigationGestionarComponent,
    GestionarComponent,
    NavigationAdministradorComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
