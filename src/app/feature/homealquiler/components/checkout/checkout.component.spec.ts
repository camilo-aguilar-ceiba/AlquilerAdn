import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { CategoriesMockService } from '@alquiler/test/homealquiler-mock.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import {  NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { CheckoutComponent } from './checkout.component';








describe('CheckoutComponent', () => {

  let fixture: ComponentFixture<CheckoutComponent>;
  let component: CheckoutComponent;
  let vehiculoservice: VehiculoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ // para pasar las dependencias
      declarations: [
        CheckoutComponent
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
    fixture = TestBed.createComponent(CheckoutComponent); // instancia
    vehiculoservice = TestBed.inject(VehiculoService);
    component = fixture.componentInstance; // traernos al componente
    fixture.detectChanges(); // algun input o data inicializada? llama a detect changes - probar la informacion en pantalla es parte de e2e
 });

  it('✅✅✅✅✅✅  El componente reservar se debe instanciar ', fakeAsync(async () => {
  expect(component).toBeDefined();
  expect(component).toBeInstanceOf(CheckoutComponent);
  console.log(vehiculoservice);
}));
  it('✅✅✅✅✅✅ Reservar', () => {
  spyOn(vehiculoservice, 'reservar').and.returnValue(of(true));
  component.reservar();
  expect(component.mostrarResumen).toBe(true);
});

 });
