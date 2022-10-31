import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-genero-detalles',
  templateUrl: './genero-detalles.page.html',
  styleUrls: ['./genero-detalles.page.scss'],
})
export class GeneroDetallesPage implements OnInit {
  pelicula = null;
  tailer = null;
  review = null;
  imagenurl = 'http://image.tmdb.org/t/p';
  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService,private iab: InAppBrowser,private alertController: AlertController) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.peliculasService.DetallesPeliculas(id).subscribe((res) =>{
      console.log(res);
      console.log(id);
      this.pelicula=res;
    })

    this.peliculasService.Trailer(id).subscribe((res) =>{
      this.tailer=res;
      if (this.tailer.results[0]== null) {
        this.tailer=null;
      }else{
      console.log("trailer")
      console.log(res);
      }      
    })

    this.peliculasService.reviews(id).subscribe((res) =>{
      this.review=res;
      console.log("reviews")
      console.log(res);
    })


  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'No hay trailer de esta pelicula',
      buttons: ['OK'],
    });

    await alert.present();
  }


  abrirtab(link){
    console.log(this.tailer);
    if (this.tailer==null) {
      this.presentAlert()      
    }else{
    this.iab.create(`https://www.youtube.com/watch?v=${link}`)
  }}

}
