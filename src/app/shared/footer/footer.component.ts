import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  anio:number = new Date().getFullYear(); //Para que cambie de manera automática el año en el footer que se indica en footer component.html//
  constructor( public _servicio: InfoPaginaService ) {};

  ngOnInit() {

  }
}
