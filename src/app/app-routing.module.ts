import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MenuComponent } from './view/menu/menu.component';
import { OrdenComponent } from './view/orden/orden.component';
import { NavigationLoginComponent } from './navigation/navigation-login/navigation-login.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import { NavigationOrdenComponent } from './navigation/navigation-orden/navigation-orden.component';
import { NavigationComprarComponent } from './navigation/navigation-comprar/navigation-comprar.component';
import { ComprarComponent } from './view/comprar/comprar.component';
import { NavigationSalirComponent } from './navigation/navigation-salir/navigation-salir.component';
import { SalirComponent } from './view/salir/salir.component';
import { GestionarComponent } from './view/gestionar/gestionar.component';
import { NavigationGestionarComponent } from './navigation/navigation-gestionar/navigation-gestionar.component';
import { NavigationAdministradorComponent } from './navigation/navigation-administrador/navigation-administrador.component';
import { AdministradorComponent } from './view/administrador/administrador.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ],
    component: NavigationComponent
  },
  {
    path: 'login',
    children: [
     
      { path: '', component: LoginComponent },
    ],
    component: NavigationLoginComponent
  },
  {
    path: 'menu',
    children: [
     
      { path: '', component: MenuComponent },
    ],
    component: NavigationMenuComponent
  },
  {
    path: 'orden',
    children: [
     
      { path: '', component: OrdenComponent },
    ],
    component: NavigationOrdenComponent
  },
  {
    path: 'comprar',
    children: [
     
      { path: '', component: ComprarComponent },
    ],
    component: NavigationComprarComponent
  },
  {
    path: 'gestionar',
    children: [
     
      { path: '', component: GestionarComponent },
    ],
    component: NavigationGestionarComponent
  },
  {
    path: 'administrador',
    children: [
     
      { path: '', component: AdministradorComponent },
    ],
    component: NavigationAdministradorComponent
  },
  {
    path: 'salir',
    children: [
     
      { path: '', component: SalirComponent },
    ],
    component: NavigationSalirComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
