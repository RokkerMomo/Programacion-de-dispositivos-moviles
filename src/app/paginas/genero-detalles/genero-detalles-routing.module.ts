import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneroDetallesPage } from './genero-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: GeneroDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneroDetallesPageRoutingModule {}
