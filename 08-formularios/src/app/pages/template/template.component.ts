import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Antonio',
    apellido: 'Moruno',
    correo: 'amoruno21@gmail.com',
  };
  constructor() {}
  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });

      return; //Hacemos un return para que no llegue abajo y no nos imprima nada por pantalla
    }

    console.log(forma.value);
  }

  ngOnInit(): void {}
}
