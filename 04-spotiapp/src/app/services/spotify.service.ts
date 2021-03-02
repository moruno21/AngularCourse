import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* El injectable le dice a angular que este servicio se va a poder inyectar en otros componentes, servicios, etc. */

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/* El providedIn: 'root' nos permite no incluir este spotifyservice en el app.module.ts, ya que angular lo detecta por si solo */
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({

      'Authorization' : 'Bearer BQC6W6REI-IvUjKD7LDIcpbaBlsLM2t2TcJ3S9STJV0dNip_d7cvhrv105txc11DhrL9gxxjj4aLfu-FGXo'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    /* const headers = new HttpHeaders({

      'Authorization' : 'Bearer BQAZ2EtqOcunO51AHUTpaUOsbM3lCmT0hgAXZD0_3BV6kPK-MPHbi700zQGruQPvWNYDHXTo4hsXkOfEN2o'
    }); */
    
    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string ){
    /* const headers = new HttpHeaders({

      'Authorization' : 'Bearer BQAZ2EtqOcunO51AHUTpaUOsbM3lCmT0hgAXZD0_3BV6kPK-MPHbi700zQGruQPvWNYDHXTo4hsXkOfEN2o'
    }); */
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
         .pipe( map ( (data: any) => data.artists.items));
  }

  getArtista( id: string ){
    return this.getQuery(`artists/${ id }`);
        /*.pipe( map ( (data: any) => data.artists.items)); */
  }
  getTopTracks( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
        .pipe( map ( (data: any) => data.tracks));
  }

}
