import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Reserva } from '@alquiler/shared/model/reserva';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() dataCheckout;
  @Output() cambioReserva = new EventEmitter<boolean>();
 public Mireserva?: Reserva;
  public mostrarResumen = true;
  public mostrarRadicado = false;
  public resumenReserva = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {}

  reservar() {
    const numeroCaracteres = 36;
    const rangoInicial = 2;
    const rangoFinal = 15;
    const radicado = Math.random().toString(numeroCaracteres).substring(rangoInicial, rangoFinal);
    this.Mireserva = new Reserva(this.dataCheckout?.idUsuario,
      this.obtenerTotal(),
      this.dataCheckout?.fecha,
      this.dataCheckout?.idVehiculo,
      radicado,
      'pendientes');
    this.vehiculoService.reservar(this.Mireserva).subscribe((data) => {
      if (data) {
        this.resumenReserva.push({
                idRadic: radicado,
        });
        Swal.fire('Guardado correctamente');
        this.mostrarResumen = true;
        this.mostrarRadicado = true;
        this.cambioReserva.emit(data);
      }
    });
  }
  obtenerTotal() {
    const valor = this.dataCheckout?.costo + this.dataCheckout?.adicional;
    const totalDescuento = 100;
    const descuento =
      this.dataCheckout?.costo * (this.dataCheckout?.descuento / totalDescuento);
    return valor - descuento;
  }
}
