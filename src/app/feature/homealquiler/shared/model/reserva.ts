export class Reserva {
    usuarioid: string;
    costo: number;
    fechaReserva: string;
    vehicleId: string;
    idRadic: string;
    estado: string;
    constructor( usuarioid: string, costo: number, fechaReserva: string, vehicleid: string, idRadic: string, estado: string) {
        this.usuarioid = usuarioid;
        this.costo = costo;
        this.fechaReserva = fechaReserva,
        this.vehicleId = vehicleid,
         this.idRadic = idRadic,
         this.estado = estado;
    }
}

