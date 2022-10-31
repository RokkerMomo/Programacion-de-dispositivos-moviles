import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneroDetallesPageRoutingModule } from './genero-detalles-routing.module';

import { GeneroDetallesPage } from './genero-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneroDetallesPageRoutingModule
  ],
  declarations: [GeneroDetallesPage]
})
export class GeneroDetallesPageModule {}
