import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrargeneroPageRoutingModule } from './mostrargenero-routing.module';

import { MostrargeneroPage } from './mostrargenero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrargeneroPageRoutingModule
  ],
  declarations: [MostrargeneroPage]
})
export class MostrargeneroPageModule {}
