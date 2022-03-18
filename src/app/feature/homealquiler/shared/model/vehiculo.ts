export class Vehiculo {
    id: number;
    marcaVehiculo: string;
    modelo: number;
    placa: string;
    color: string;
    urlimagen: string;
    categoria: number;


    constructor(id: number, marcaVehiculo: string, modelo: number, placa: string, color: string, urlimagen: string, categoria: number) {
        this.id = id;
        this.marcaVehiculo = marcaVehiculo;
        this.modelo = modelo;
        this.placa = placa;
        this.color = color;
        this.urlimagen = urlimagen,
        this.categoria = categoria;
    }
}
