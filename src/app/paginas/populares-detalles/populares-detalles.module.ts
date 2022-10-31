import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularesDetallesPageRoutingModule } from './populares-detalles-routing.module';

import { PopularesDetallesPage } from './populares-detalles.page';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  imports: [
    [ TruncateModule ],
    CommonModule,
    FormsModule,
    IonicModule,
    PopularesDetallesPageRoutingModule
  ],
  declarations: [PopularesDetallesPage]
})
export class PopularesDetallesPageModule {}
