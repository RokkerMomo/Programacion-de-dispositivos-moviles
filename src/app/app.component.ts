import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PeliculasService } from './servicios/peliculas.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private router: Router, private peliculasservices: PeliculasService) {}
  id={
    "session_id":''
  }
  salir(){
    this.router.navigate(['login']);
  }

  generos(){
    this.router.navigate(['generos']);
  }

  populares(){
    this.router.navigate(['populares']);
  }
}


