import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Categorias } from '../model/categorias';

import { CategoriasService } from './categorias.service';

describe('CategoriasService', () => {
  let httpMock: HttpTestingController;
  let service: CategoriasService;
  const apiEndpointCategories = `${environment.endpoint}categories`;

  beforeEach(() => {
    const injector =  TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriasService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service =  TestBed.inject(CategoriasService);
  });

  it('should be created', () => {
    const categoriaservice: CategoriasService = TestBed.inject(CategoriasService);
    expect(categoriaservice).toBeTruthy();
  });

  it('--------------> Deberia Listar categorias', () => {
    const dummmyCategories = [
      new Categorias(1, 'Producto 1', 1000), new Categorias(1, 'Producto 1', 1000)
    ];
    service.consultar().subscribe(categoria => {
      expect(categoria.length).toBe(2);
      expect(categoria).toEqual(dummmyCategories);
    });
    const req = httpMock.expectOne(apiEndpointCategories);
    expect(req.request.method).toBe('GET');
    req.flush(dummmyCategories);
  });
});
