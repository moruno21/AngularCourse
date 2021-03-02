import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'

})


export class BodyComponent {
    mostrar = true;
  
    frase: any = {
        mensaje: 'Hola! Esta es mi primera web con Angular',
        grupo: 'Angular'
    };

    personajes: string[] = ['Typescript', 'HTML', 'CSS', 'Bootstrap'];


}
