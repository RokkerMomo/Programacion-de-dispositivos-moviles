import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { element } from 'protractor';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.page.html',
  styleUrls: ['./populares.page.scss'],
})
export class PopularesPage implements OnInit {
  parametros: NavigationExtras = {
    queryParams:{user:""}
  }
  peliculas = [];
  paginaActual = 1;
  imagenurl = 'http://image.tmdb.org/t/p';
  text="";
  titulo= "Populares";

  constructor(private peliculasService: PeliculasService, private loadingCtrl: LoadingController, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const user = this.route.snapshot.queryParamMap.get('user');
    const params: NavigationExtras = {
      queryParams:{user:user
      },
    }
    this.parametros=params;
    console.log(params);
    console.log(this.parametros);
   this.cargarPeliculas();
  }


  

  async cargarPeliculas(){
    const loading = await this.loadingCtrl.create({
      message:'cargando...',
      spinner:'bubbles',
    });
    await loading.present();

    this.peliculasService.PeliculasPopulares(this.paginaActual).subscribe((res)=>{
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

  buscar(texto){
    if(texto==""){
      this.titulo="Populares"
      this.peliculas=[];
      this.ngOnInit();
    }else{
      this.paginaActual=1;
      this.titulo=`Buscando ${texto}`;
    console.log(this.paginaActual);
    this.peliculas=[];
    this.peliculasService.buscarNombre(texto,this.paginaActual).subscribe((res)=>{
      this.peliculas = [...this.peliculas, ...res.results];
      console.log(res);
    })
  }}

  perfil(){
    const user = this.route.snapshot.queryParamMap.get('user');
    const params: NavigationExtras = {
      queryParams:{user:user
      },
    }
    console.log(user);
    this.router.navigate(['perfil'],params);
  }

}
