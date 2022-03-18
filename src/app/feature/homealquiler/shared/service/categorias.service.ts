
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Categorias } from '../model/categorias';

@Injectable()
export class CategoriasService {

  constructor(private http: HttpService) { }
  public consultar() {
        return   this.http.doGet<Categorias[]>(`${environment.endpoint}categories`);
  }
}
