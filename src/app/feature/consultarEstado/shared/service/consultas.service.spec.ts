import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { ReservaDetail } from '../model/ReservaDetail';
import { ConsultasService } from './consultas.service';

describe('ConsultasService', () => {
  let service: ConsultasService;
  let httpMock: HttpTestingController;
  const id = 1 ;
  const apiEndPointReservaConsulta = `${environment.endpoint}reserva?idRadic=${id}`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsultasService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ConsultasService);
  });

  it('should be created', () => {
    const consultasService: ConsultasService = TestBed.inject(ConsultasService);
    expect(consultasService).toBeTruthy();
  });




  it('Deberia Obtener los detalles de una reserva', () => {
    const dummyProductos = [
      new ReservaDetail(1, '1', 200000, '2022-05-04', '1', 'asdkajd2', 'pendientes')
    ];
    service.consultar(1).subscribe(reserva => {
      expect(reserva.length).toBe(1);
      expect(reserva).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndPointReservaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

});
