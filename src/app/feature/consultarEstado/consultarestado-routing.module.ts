import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarEstadoComponent } from './components/consultar-estado/consultar-estado.component';



const routes: Routes = [
  {
    path: '',
    component: ConsultarEstadoComponent,
     children: [
       {
         path: 'consultarEstado',
         component: ConsultarEstadoComponent
       },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarEstadoRoutingModule{ }
