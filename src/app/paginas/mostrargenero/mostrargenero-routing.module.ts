import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrargeneroPage } from './mostrargenero.page';

const routes: Routes = [
  {
    path: '',
    component: MostrargeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrargeneroPageRoutingModule {}
