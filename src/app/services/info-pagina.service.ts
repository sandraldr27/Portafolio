import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};  //Para que pueda admitir una respuesta vacía, puedo ir a mi interfaz de info-pagina y colocar ? a todas mis propiedades que traje del archivo Json. El símbolo ? significa que la información puede venir o no//
  cargada = false;

  constructor( private http: HttpClient ) {
    //console.log('Servicio de infoPagina listo');
    /*
    - Tengo que poder leer el archivo JSON y tomar sus propiedades para que aparezcan en las páginas
    - Para eso tendré que importar en app.module.ts dentro del @NgModule, el HttpClientModule (Es un módulo que me permitirá importar información HTTP. En la parte superior importaré también el HttpClientModule)
    */

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp : InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
      //console.log(resp ['twitter']);

    });
  }
}

