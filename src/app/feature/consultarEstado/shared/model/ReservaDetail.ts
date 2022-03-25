// tslint:disable-next-line:max-line-length

export class ReservaDetail {
    id: number;
    usuarioid: string;
    costo: number;
    fechaReserva: string;
    vehicleId: string;
    idRadic: string;
    estado: string;
    constructor(id: number,  usuarioid: string, costo: number, fechaReserva: string, vehicleid: string, idRadic: string, estado: string) {
        this.id = id;
        this.usuarioid = usuarioid;
        this.costo = costo;
        this.fechaReserva = fechaReserva,
        this.vehicleId = vehicleid,
         this.idRadic = idRadic,
         this.estado = estado;
    }
}

