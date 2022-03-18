export class Reserva {
    usuarioid: string;
    costo: number;
    fechaReserva: string;
    vehicleId: string;
    idRadicado: string;
    estado: string;
    constructor( usuarioid: string, costo: number, fechaReserva: string, vehicleid: string, idRadicado: string, estado: string) {
        this.usuarioid = usuarioid;
        this.costo = costo;
        this.fechaReserva = fechaReserva,
        this.vehicleId = vehicleid,
         this.idRadicado = idRadicado,
         this.estado = estado;
    }
}

