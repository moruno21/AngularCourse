import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  
  nuevasCanciones: any [] = [];

  loading: boolean;

  error: boolean;
  mensajeError:string;


  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio )=> {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = (errorServicio.error.error.message);

      });
  }


}


/* Peticiones http.get para mostrar en la web los paises y su poblacion */

/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises : any[] = [];

  constructor( private http: HttpClient ) { 
    console.log('Constructor del Home hecho con exito');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((respuesta: any) => {
        this.paises = respuesta;
        console.log(respuesta);
      })

  }

  ngOnInit(): void {
  }

} */
