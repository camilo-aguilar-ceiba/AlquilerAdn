import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { CategoriesMockService } from '@alquiler/test/homealquiler-mock.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import {  NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { ReservarvehiculoComponent } from './reservarvehiculo.component';









describe('ReservarvehiculoComponent', () => {

  let fixture: ComponentFixture<ReservarvehiculoComponent>;
  let component: ReservarvehiculoComponent;
  let vehiculoservice: VehiculoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ // para pasar las dependencias
      declarations: [
        ReservarvehiculoComponent
      ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        SharedModule,
        NgbModule,
        NgbDatepickerModule,

        ],
       providers: [
            { provide: VehiculoService , useClass: CategoriesMockService },

         ]
    }).compileComponents(); // necesario cuando se prueban componentes cuando se trabaja con servicios no es necesario
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarvehiculoComponent); // instancia
    vehiculoservice = TestBed.inject(VehiculoService);
    component = fixture.componentInstance; // traernos al componente
    fixture.detectChanges(); // algun input o data inicializada? llama a detect changes - probar la informacion en pantalla es parte de e2e
 });

  it('✅✅✅✅✅✅  El componente reservar se debe instanciar ', fakeAsync(async () => {
  expect(component).toBeDefined();
  expect(component).toBeInstanceOf(ReservarvehiculoComponent);
}));

  it('✅✅✅✅✅✅  Cambio reserva', () => {
  component.cambioReserva(true);
  expect(component.mostrarFormulario).toBe(false);
});
  it('✅✅✅✅✅✅ Dia No permitido ', () => {
  component.fechaActual = ('2022-03-17');
  component.diaPermitido('2022-03-17');
  expect(component.checkPermitido).toBe(false);
  });
  it('✅✅✅✅✅✅ Dia permitido ', () => {
  component.fechaActual = ('2022-03-17');
  component.diaPermitido('2022-03-18');
  expect(component.checkPermitido).toBe(true);
});

  it('✅✅✅✅✅✅ Validar Cargos  ', () => {
  component.fechaActual = ('2022-03-10');
  component.validarCargos('2022-03-17');
  expect(component.mostrarCheckout).toBe(true);

});

  it('✅✅✅✅✅✅ Consultar disponibilidad', () => {
  spyOn(vehiculoservice, 'consultarDisponibilidad').and.callThrough();
  component.fechaActual = ('2022-03-10');
  component.consultarDisponibilidad('2022-03-17');
  expect(component.mostrarCheckout).toBe(false);
});

  it('✅✅✅✅✅✅ Consultar disponibilidad ya alquilado', () => {
  spyOn(vehiculoservice, 'consultarDisponibilidad').and.callThrough();
  component.fechaActual = ('2022-03-10');
  component.consultarDisponibilidad('2022-03-18');
  expect(component.mostrarCheckout).toBe(true);
});

  it('✅✅✅✅✅✅ Consultar disponibilidad ya alquilado', () => {
  spyOn(vehiculoservice, 'consultarDisponibilidad').and.callThrough();
  component.fechaActual = ('2022-03-10');
  component.consultarDisponibilidad('2022-03-19');
  expect(component.mostrarCheckout).toBe(true);
  });

  it('✅✅✅✅✅✅ Formatear fecha', () => {
  const fechaActual = {year: 2022, month: 4, day: 10};
  const fecha = component.formatearFecha(fechaActual);
  expect(fecha).toBe('2022-04-10');
});

  it('✅✅✅✅✅✅ OnDateselect', () => {
  const fechaActual = {year: 2022, month: 4, day: 10};
  component.startDate = fechaActual;
  component.onDateSelect();
  const data =  component.formatearFecha(fechaActual);
  component.consultarDisponibilidad(data);
  expect(component.mostrarCheckout).toBeDefined();
});

 });
