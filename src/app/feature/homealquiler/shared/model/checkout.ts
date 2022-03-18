export class Checkout {
      costo: number;
      descuento: number;
      adicional: number;
      idUsuario: number;
      idVehiculo: number;
      fecha: string;
    constructor(costo: number, descuento: number, adicional: number, idUsuario: number, idVehiculo: number, fecha: string) {
        this.costo = costo;
        this.descuento = descuento;
        this.adicional = adicional;
        this.idUsuario = idUsuario;
        this.idUsuario = idVehiculo;
        this.fecha = fecha;
  }
}
