import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../model/vehiculo';
import { Reserva } from '../model/reserva';

@Injectable()
export class VehiculoService {

  constructor(protected http: HttpService) { }
  public consultarCategorias(id) {
    return this.http.doGet<Vehiculo[]>(`${environment.endpoint}vehicles?categoria=${id}`);
}

public consultarDisponibilidad(id) {
  return this.http.doGet<any>(`${environment.endpoint}vehicles/${id}?_embed=reserva`);
}

public reservar(reserva: Reserva) {
  return this.http.doPost<Reserva, boolean>(`${environment.endpoint}reserva`, reserva
);
}
}
