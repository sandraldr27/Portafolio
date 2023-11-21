import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor( private http: HttpClient ) {
    //console.log('Servicio de infoPagina listo');
    /*
    - Tengo que poder leer el archivo JSON y tomar sus propiedades para que aparezcan en las páginas
    - Para eso tendré que importar en app.module.ts dentro del @NgModule, el HttpClientModule (Es un módulo que me permitirá importar información HTTP. En la parte superior importaré también el HttpClientModule)
    */

    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp => {
      console.log(resp);

    });
  }
}

