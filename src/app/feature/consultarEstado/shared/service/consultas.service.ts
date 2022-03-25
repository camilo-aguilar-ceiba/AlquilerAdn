

import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { ReservaDetail } from '../model/ReservaDetail';

@Injectable()
export class ConsultasService {

  constructor(private http: HttpService) { }

  public consultar(id) {
      return this.http.doGet<ReservaDetail[]>(`${environment.endpoint}reserva?idRadic=${id}`);
  }
}
