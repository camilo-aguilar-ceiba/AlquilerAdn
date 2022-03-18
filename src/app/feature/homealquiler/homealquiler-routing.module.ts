import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilarvehiculoComponent } from './components/alquilarvehiculo/alquilarvehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { MenualquilerComponent } from './components/menualquiler/menualquiler.component';

const routes: Routes = [
  {
    path: '',
    component: MenualquilerComponent,
     children: [
       {
         path: 'alquilarVehiculo',
         component: AlquilarvehiculoComponent
       },
       {
          path: 'listarVehiculos/:idcategoria',
         component: ListarVehiculosComponent
        },
      //  {
      //    path: 'borrar',
      //    component: BorrarProductoComponent
      //  }
     ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomealquilerRoutingModule { }
