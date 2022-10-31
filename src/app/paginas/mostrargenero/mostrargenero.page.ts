import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-mostrargenero',
  templateUrl: './mostrargenero.page.html',
  styleUrls: ['./mostrargenero.page.scss'],
})
export class MostrargeneroPage implements OnInit {

  constructor(private route:ActivatedRoute,private peliculasService: PeliculasService, private loadingCtrl: LoadingController) { }
  peliculas = [];
  paginaActual = 1;
  imagenurl = 'http://image.tmdb.org/t/p';
  text="";
  titulo= "";
  ngOnInit() {
    this.cargarPeliculas();
    this.cargartitulo();
}
  cargartitulo() {
    const g = this.route.snapshot.paramMap.get('id');
    switch (g) {
      case "28":
        this.titulo="Accion"
        break;
        case "12":
        this.titulo="Aventura"
        break;
        case "16":
          this.titulo="Animacion"
        break;
        case "35":
          this.titulo="Comedia"
        break;
        case "80":
          this.titulo="Crimen"
        break;
        case "99":
          this.titulo="Documental"
        break;
        case "18":
          this.titulo="Drama"
        break;
        case "10751":
          this.titulo="Familia"
        break;
        case "14":
          this.titulo="Fantasia"
        break;
        case "27":
          this.titulo="Horror"
        break;
        case "9648":
          this.titulo="Misterio"
        break;
    
      default:
        break;
    }
  }

async cargarPeliculas(){
  const loading = await this.loadingCtrl.create({
    message:'cargando...',
    spinner:'bubbles',
  });
  await loading.present();
  const g = this.route.snapshot.paramMap.get('id');
  this.peliculasService.genero(this.paginaActual,g).subscribe((res)=>{
    loading.dismiss();
    this.peliculas = [...this.peliculas, ...res.results];
    console.log(res);
  })
}

paginasiguiente(){
  this.paginaActual+=1;
  console.log(this.paginaActual);
  this.peliculas=[];
  this.ngOnInit();
}

paginaanterior(){
  if (this.paginaActual==1) {
    
  }else{
  this.paginaActual-=1;
  console.log(this.paginaActual);
  this.peliculas=[];
  this.ngOnInit();
}}


}