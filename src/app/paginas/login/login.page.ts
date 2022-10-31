import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { request } from 'http';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { environment } from 'src/environments/environment';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  
  
  constructor(private router:Router,private iab: InAppBrowser, private peliculasService:PeliculasService,private alertController: AlertController, private loadingCtrl: LoadingController) { }
  
  variable= null;

 id="";

  usuario:string;
  pass:string;


  Datos={
  "username": "",
  "password": "",
  "request_token": ""
  }

  token={
    "request_token":""
  }


  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'El nombre de usuario o la contraseña es incorrecto',
      buttons: ['OK'],
    });

    await alert.present();
  }

  abrirtab(){
    this.iab.create(`https://www.themoviedb.org/signup`)
  }

  invitado(){
    this.router.navigate(['/populares']);
  }
  async aceptar(){

    const loading = await this.loadingCtrl.create({
      message:'cargando...',
      spinner:'bubbles',
    });
    await loading.present();

    this.Datos.username=this.usuario;
    this.Datos.password=this.pass;
    this.peliculasService.PedirToken().subscribe((res)=>{
      this.variable=res
      this.Datos.request_token=this.variable.request_token;
      console.log(this.variable);
    })

    setTimeout(()=>{
      this.peliculasService.request(this.Datos).subscribe((res)=>{
        console.log(res);
        this.variable=res;
      },(error)=>{
        this.presentAlert();
        loading.dismiss();
      })

      setTimeout(()=>{
        this.token.request_token=this.Datos.request_token;
     this.peliculasService.Validar(this.token).subscribe((res)=>{
       console.log(res);
       this.variable=res
       this.id=this.variable.session_id
       console.log(this.id);
       if (this.variable.success==true) {
        loading.dismiss();
        this.usuario='';
        this.pass='';
        const params: NavigationExtras = {
          queryParams:{user:this.id
          },
        }
         this.router.navigate(['/populares'],params);
       } else {
         
       }
     })
     }, 1000)


    }, 1000)



    
   
    
  }



}
