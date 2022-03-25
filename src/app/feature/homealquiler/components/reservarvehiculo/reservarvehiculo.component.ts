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

  public mostrarCheckout = false;
  public mostrarFormulario = true;
  public fechaActual: string; // '2022-03-27'//
  public dataCheck: Checkout;
  public cantidadReservas = 0;
  public startDate;
  checkPermitido = false;
  constructor(public vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.fechaActual = moment().format('YYYY-MM-DD');

  }

  onDateSelect() {
    if (this.startDate === undefined) {
      Swal.fire('Ingresa una fecha');
      return;
    }
    this.mostrarCheckout = false;
    const fechaCalendario = this.formatearFecha(this.startDate);
    this.consultarDisponibilidad(fechaCalendario);
  }

  formatearFecha(fechaSeleccionada) {
    const numeroMes = 9;
    const year = fechaSeleccionada.year;
    const month = fechaSeleccionada.month <= numeroMes ? '0' + fechaSeleccionada.month : fechaSeleccionada.month;
    const day = fechaSeleccionada.day <= numeroMes ? '0' + fechaSeleccionada.day : fechaSeleccionada.day;
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
    const viernes = 5;
    const sabado = 0;
    const domingo = 6;
    const diaJueves = 4;
    let valorDescuento = 10;
    const costoAdicional = 100000;
    const DiaActual = moment(this.fechaActual).day();
    const validarFecha = DiaActual === viernes || DiaActual === sabado || DiaActual === domingo;
    if (this.fechaActual === fechareal && validarFecha) {
      this.dataCheck = {
        costo: this.costoVehiculo,
        descuento: 0,
        adicional:  costoAdicional,
        idUsuario: 1,
        idVehiculo: 2,
        fecha: fechareal
       };
    }
    if (
      this.fechaActual < fechareal
    ) {
      if (moment(this.fechaActual).day() > 0 &&
      moment(this.fechaActual).day() <= diaJueves){
      valorDescuento = 0;
      }
      this.dataCheck = {
        costo: this.costoVehiculo,
        descuento: valorDescuento,
        adicional:  0,
        idUsuario: 1,
        idVehiculo: 2,
        fecha: fechareal
       };
      }
    this.mostrarCheckout = true;
  }
}
