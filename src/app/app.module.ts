import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule],
  providers: [YoutubeVideoPlayer,InAppBrowser,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,   }],
  bootstrap: [AppComponent],
})
export class AppModule {}
