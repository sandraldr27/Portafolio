import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

//Rutas//
import { Routes, RouterModule} from '@angular/router';

//Componentes//
import { PortafolioComponent } from '../pages/portafolio/portafolio.component';
import { AboutComponent } from '../pages/about/about.component';
import { ItemComponent } from '../pages/item/item.component';


const app_routes: Routes = [  //Declaro mi constante (Arreglo) para las rutas. Aquí le indico a mi código a dónde quiero navegar dependiendo de cada ruta escogida//
    { path: 'home', component: PortafolioComponent}, //El portafolio component es la página principal//
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }  //Si se escribe cualquier cosa como una ruta, el navegador redigirá a la página principal o home. También se puede indicar colocando **. En este caso se está redireccionando a '' que es el portafolio//
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forRoot( app_routes, { useHash : true}) //En las rutas agrego el Hash. En el navegador por ejemplo aparecerá: localhost:4200/#/about. Lo que significa que después del # no viene un directorio sino parte de la propia ruta//
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
