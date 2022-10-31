import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularesDetallesPage } from './populares-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: PopularesDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularesDetallesPageRoutingModule {}
