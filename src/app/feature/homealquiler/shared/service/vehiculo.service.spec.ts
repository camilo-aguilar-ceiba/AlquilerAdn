import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { Vehiculo } from '../model/vehiculo';
import { VehiculoService } from './vehiculo.service';


describe('VehiculoService', () => {
  let httpMock: HttpTestingController;
  let service: VehiculoService;
  const id = 1 ;
  const apiEndPointVehiculoConsulta = `${environment.endpoint}vehicles?categoria=${id}`;
  const apiEndpointDisponibilidad = `${environment.endpoint}vehicles/${id}?_embed=reserva`;
  const apiEndpointReservar = `${environment.endpoint}reserva`;
 // let httpMock: HttpTestingController;
 // let service: VehiculoService;
 // const apiEndpointProductoConsulta = `${environment.endpoint}/tiposFamilia`;
 // const apiEndpointProductos = `${environment.endpoint}/productos`;

  beforeEach(() => {
  const injector = TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [VehiculoService, HttpService]
  });
  httpMock = injector.inject(HttpTestingController);
  service = TestBed.inject(VehiculoService);
});

  it('should be created', () => {
  const vehiculoService: VehiculoService = TestBed.inject(VehiculoService);
  expect(vehiculoService).toBeTruthy();
});


  it('deberia listar los vehiculos que pertenecen a una categoria', () => {
  const dummyProductos = [
    new Vehiculo(1, 'Toyota', 2018, 'XML342', 'rojo', 'https://www.svgimages.com/svg-image/s6/car-left-side-256x256.png', 1)
  ];
  service.consultarCategorias(1).subscribe(productos => {
    expect(productos.length).toBe(1);
    expect(productos).toEqual(dummyProductos);
  });
  const req = httpMock.expectOne(apiEndPointVehiculoConsulta);
  expect(req.request.method).toBe('GET');
  req.flush(dummyProductos);
});


  it('deberia Consultar la disponibilidad', () => {
  const dummyProductos = [
    {
      id: 3,
      marca_vehiculo: 'VIPA',
      modelo: 2020,
      placa: 'RTYU8',
      color: 'Negro',
      urlimagen: 'https://www.svgimages.com/svg-image/s6/car-left-side-256x256.png',
      categoria: 2,
      costo: 500000,
      reserva: []
    }
  ];
  service.consultarDisponibilidad(1).subscribe(disponibilidad => {
    expect(disponibilidad.length).toBe(1);
    expect(disponibilidad).toEqual(dummyProductos);
  });
  const req = httpMock.expectOne(apiEndpointDisponibilidad);
  expect(req.request.method).toBe('GET');
  req.flush(dummyProductos);
});
  it('deberia Reservar un vehiculo', () => {
  const dummyReserva = new Reserva('1', 500, '2022-05-01', '1', 'akljdsad', 'pendientes');
  service.reservar(dummyReserva).subscribe((respuesta) => {
     expect(respuesta).toEqual(true);
   });
  const req = httpMock.expectOne(apiEndpointReservar);
  expect(req.request.method).toBe('POST');
  req.event(new HttpResponse<boolean>({body: true}));
 });


  it('Deberia listar los vehiculos de una categoria', () => {
   const vehiculoService: VehiculoService = TestBed.inject(VehiculoService);
   expect(vehiculoService).toBeTruthy();
 });


});
