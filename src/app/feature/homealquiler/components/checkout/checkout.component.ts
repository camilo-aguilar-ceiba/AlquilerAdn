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
  public title = 'Resumen de la reserva';
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {}

  reservar() {
    const radicado = Math.random().toString(36).substring(2, 15);
    console.log('datos');
    console.log(JSON.stringify(this.dataCheckout));
    this.Mireserva = new Reserva(this.dataCheckout?.idUsuario,
      this.obtenerTotal(),
      this.dataCheckout?.fecha,
      this.dataCheckout?.idVehiculo,
      radicado,
      'pendientes');
    this.vehiculoService.reservar(this.Mireserva).subscribe((data) => {
      if (data) {
        console.log(data);
        this.resumenReserva.push({
                idRadicado: radicado,
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
    console.log(valor);
    const descuento =
      this.dataCheckout?.costo * (this.dataCheckout?.descuento / 100);
    return valor - descuento;
  }
}
