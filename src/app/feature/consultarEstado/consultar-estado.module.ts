import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarEstadoComponent } from './components/consultar-estado/consultar-estado.component';
import { ConsultarEstadoRoutingModule } from './consultarestado-routing.module';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from './shared/service/consultas.service';



@NgModule({
  declarations: [
    ConsultarEstadoComponent
  ],
  imports: [
    CommonModule,
    ConsultarEstadoRoutingModule,
    FormsModule
  ],
  exports: [
    ConsultarEstadoComponent
  ],
  providers: [
    ConsultasService
  ]
})
export class ConsultarEstadoModule { }
