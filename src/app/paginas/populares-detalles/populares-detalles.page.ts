import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
import { TruncateModule } from '@yellowspot/ng-truncate';
@Component({
  selector: 'app-populares-detalles',
  templateUrl: './populares-detalles.page.html',
  styleUrls: ['./populares-detalles.page.scss'], 
})
export class PopularesDetallesPage implements OnInit {
  pelicula = null;
  tailer = null;
  review = null;
  letras = "200";
  imagenurl = 'http://image.tmdb.org/t/p';
  constructor(private route: ActivatedRoute, private peliculasService: PeliculasService,private iab: InAppBrowser,private alertController: AlertController) {
    
   }


  trimString(string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
}
  
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


  leermas(){
    this.letras="999999";
  }
}
