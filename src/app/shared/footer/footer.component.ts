import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  anio:number = new Date().getFullYear(); //Para que cambie de manera automática el año en el footer que se indica en footer component.html//

}
