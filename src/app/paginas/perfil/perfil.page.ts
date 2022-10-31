import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  resultado=null;
  peliculas = [];
  paginaActual= 1;
  imagenurl = 'http://image.tmdb.org/t/p';
  constructor(private peliculasservice:PeliculasService, private route:ActivatedRoute,private loadingCtrl: LoadingController,private router: Router) { }

  ngOnInit() {

    this.cargarpefil();
    
  }

  async cargarpefil(){
    const user = this.route.snapshot.queryParamMap.get('user');
    console.log(user);
    this.peliculasservice.perfildetalles(user).subscribe(async (res)=>{
      this.resultado=res;
      console.log(res);

      const loading = await this.loadingCtrl.create({
        message:'cargando...',
        spinner:'bubbles',
      });
      await loading.present();
      const user = this.route.snapshot.queryParamMap.get('user');
      this.peliculasservice.verfavoritos(this.paginaActual,user).subscribe((res)=>{
        loading.dismiss();
        this.peliculas = [...this.peliculas, ...res.results];
        console.log(res);
      })


    })
  }

  volver(){
    const user = this.route.snapshot.queryParamMap.get('user');
    const params: NavigationExtras = {
      queryParams:{user:user
      },
    }
    console.log(user);
    this.router.navigate(['populares'],params);
  }

}
