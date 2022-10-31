import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./paginas/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'populares',
    loadChildren: () => import('./paginas/populares/populares.module').then( m => m.PopularesPageModule)
  },
  {
    path: 'populares/:id',
    loadChildren: () => import('./paginas/populares-detalles/populares-detalles.module').then( m => m.PopularesDetallesPageModule)
  },
  {
    path: 'generos',
    loadChildren: () => import('./paginas/generos/generos.module').then( m => m.GenerosPageModule)
  },
  {
    path: 'generos/:id',
    loadChildren: () => import('./paginas/mostrargenero/mostrargenero.module').then( m => m.MostrargeneroPageModule)
  },
  {
    path: 'generos/:id/:id',
    loadChildren: () => import('./paginas/genero-detalles/genero-detalles.module').then( m => m.GeneroDetallesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
