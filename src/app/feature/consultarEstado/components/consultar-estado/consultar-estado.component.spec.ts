import { ConsultarEstadoComponent } from './consultar-estado.component';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsultasService } from '@consultar/shared/service/consultas.service';
import { CategoriesMockService } from '@alquiler/test/homealquiler-mock.service';



describe('ConsultarEstadoComponent', () => {
  let component: ConsultarEstadoComponent;
  let fixture: ComponentFixture<ConsultarEstadoComponent>;
  let consultaService: ConsultasService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        // para pasar las dependencias
        declarations: [ConsultarEstadoComponent],
        imports: [
          CommonModule,
          HttpClientTestingModule,
          SharedModule,
          RouterTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [
          { provide: ConsultasService, useClass: CategoriesMockService },
          ],
      }).compileComponents(); // necesario cuando se prueban componentes cuando se trabaja con servicios no es necesario
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEstadoComponent); // instancia
    consultaService = TestBed.inject(ConsultasService);
    component = fixture.componentInstance; // traernos al componente
    fixture.detectChanges(); // algun input o data inicializada? llama a detect changes - probar la informacion en pantalla es parte de e2e
    // location = TestBed.get(Location);
    // route = TestBed.inject(Router)
  });
  it('✅✅✅✅✅✅ El componente se debe instanciar ', fakeAsync(async () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ConsultarEstadoComponent);
  }));

  it('✅✅✅✅✅✅ Cargar el detalle de la reserva', fakeAsync(async () => {
    spyOn(consultaService, 'consultar').and.callThrough();
    expect(component).toBeDefined();
     }));
});
