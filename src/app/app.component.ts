import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service'; //Importo el servicio que he creado como info-pagina.service.ts//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'portafolio';
  constructor( public infoPaginaService: InfoPaginaService ) {
  }
}
