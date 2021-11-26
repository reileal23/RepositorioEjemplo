import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'desayuno',
    loadChildren: () => import('./pages/desayuno/desayuno.module').then( m => m.DesayunoPageModule)
  },
  {
    path: 'almuerzo-cena',
    loadChildren: () => import('./pages/almuerzo-cena/almuerzo-cena.module').then( m => m.AlmuerzoCenaPageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./pages/snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'bienvenidos',
    loadChildren: () => import('./pages/bienvenidos/bienvenidos.module').then( m => m.BienvenidosPageModule)
  },
  {
    path: 'resumen-alimentos',
    loadChildren: () => import('./pages/resumen-alimentos/resumen-alimentos.module').then( m => m.ResumenAlimentosPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  }
  ];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }