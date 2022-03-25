import { MenualquilerComponent } from '@alquiler/components/menualquiler/menualquiler.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'alquiler', loadChildren: () => import('@alquiler/homealquiler.module').then(mod => mod.HomealquilerModule) },
  { path: 'alquilernuevo', component: MenualquilerComponent},
  { path: 'consultarEstado', loadChildren: () => import('@consultar/consultar-estado.module').then(mod => mod.ConsultarEstadoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
