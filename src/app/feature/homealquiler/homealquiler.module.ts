import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenualquilerComponent } from './components/menualquiler/menualquiler.component';
import { HomealquilerRoutingModule } from './homealquiler-routing.module';
import { AlquilarvehiculoComponent } from './components/alquilarvehiculo/alquilarvehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { ReservarvehiculoComponent } from './components/reservarvehiculo/reservarvehiculo.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoriasService } from './shared/service/categorias.service';
import { VehiculoService } from './shared/service/vehiculo.service';


@NgModule({
  declarations: [
    MenualquilerComponent,
    AlquilarvehiculoComponent,
    ListarVehiculosComponent,
    ReservarvehiculoComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    HomealquilerRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    MenualquilerComponent, NgbDatepicker
  ],
  providers: [
    CategoriasService,
    VehiculoService
  ]
})
export class HomealquilerModule { }
