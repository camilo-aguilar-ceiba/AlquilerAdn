import { Checkout } from '@alquiler/shared/model/checkout';
import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservarvehiculo',
  templateUrl: './reservarvehiculo.component.html',
  styleUrls: ['./reservarvehiculo.component.scss'],
})
export class ReservarvehiculoComponent implements OnInit {
  @Input() idvehiculo: string;
  @Input() fechasReserva = [];
  @Input() costoVehiculo: number;
  public valorDescuento = 10;
  public costoAdicional = 100000;
  public mostrarCheckout = false;
  public mostrarFormulario = true;
  public fechaActual: string; // '2022-03-27'//
  public dataCheck: Checkout;
  public cantidadReservas = 0;
  checkPermitido = false;
  constructor(public vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.fechaActual = moment().format('YYYY-MM-DD');

  }

  onDateSelect(fechaSeleccionada) {
    this.mostrarCheckout = false;
    const fechaCalendario = this.formatearFecha(fechaSeleccionada);
    console.log(fechaCalendario);
    this.consultarDisponibilidad(fechaCalendario);
  }

  formatearFecha(fechaSeleccionada) {
    console.log(fechaSeleccionada);
    const year = fechaSeleccionada.year;
    const month = fechaSeleccionada.month <= 9 ? '0' + fechaSeleccionada.month : fechaSeleccionada.month;
    const day = fechaSeleccionada.day <= 9 ? '0' + fechaSeleccionada.day : fechaSeleccionada.day;
    const finalDate = year + '-' + month + '-' + day;
    return finalDate.toString();
  }

  consultarDisponibilidad(fechaCalendario) {
    let permiso = true;
    this.vehiculoService
      .consultarDisponibilidad(this.idvehiculo)
      .subscribe((data) => {
        this.cantidadReservas = data?.reserva?.length;
        if (this.cantidadReservas > 0) {
          for (const row of data?.reserva ) {
            if (row.fechaReserva === fechaCalendario) {
              permiso = false;
              Swal.fire(
                'Lo sentimos el vehículo ya fue reservado para esta fecha'
              );
              this.mostrarCheckout = false;
            }
          }
        }
        if (permiso === false) {
          return;
        }else{
          this.diaPermitido(fechaCalendario);
        }

      });
  }

  cambioReserva(evento) {
    this.mostrarFormulario = false; // es false
    console.log(evento);
  }
  diaPermitido(fecha) {
    const diaSemana = moment(fecha).day();
    if (this.fechaActual > fecha || (diaSemana > 0 && diaSemana < 5)) {
      this.checkPermitido = false;
      Swal.fire('Selecciona una fecha valida');
      return;
    }
    this.checkPermitido = true;
    this.validarCargos(fecha);
  }

  validarCargos(fechareal) {
    const DiaActual = moment(this.fechaActual).day();
    const validarFecha = DiaActual === 5 || DiaActual === 0 || DiaActual === 6;
    if (this.fechaActual === fechareal && validarFecha) {
      console.log('costo vehiculo 1 ' + this.costoVehiculo);
      this.dataCheck = {
        costo: this.costoVehiculo,
        descuento: 0,
        adicional:  this.costoAdicional,
        idUsuario: 1,
        idVehiculo: 2,
        fecha: fechareal
       };
    }
    if (
      this.fechaActual < fechareal
    ) {
      if (moment(this.fechaActual).day() > 0 &&
      moment(this.fechaActual).day() <= 4){
        this.valorDescuento = 0;
      }
      this.dataCheck = {
        costo: this.costoVehiculo,
        descuento: this.valorDescuento,
        adicional:  0,
        idUsuario: 1,
        idVehiculo: 2,
        fecha: fechareal
       };
      }
    this.mostrarCheckout = true;
  }
}
