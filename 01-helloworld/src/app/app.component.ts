import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Antonio';
  apellido: string = 'Moruno';
  edad: number = 19;
  sexo: string = 'Masculino';

}
