import { ListarVehiculosComponent } from './listar-vehiculos.component';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { CategoriesMockService } from '@alquiler/test/homealquiler-mock.service';
import { SharedModule } from '@shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListarVehiculosComponent', () => {
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let component: ListarVehiculosComponent;
  let vehiculoservice: VehiculoService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        // para pasar las dependencias
        declarations: [ListarVehiculosComponent],
        imports: [
          CommonModule,
          HttpClientTestingModule,
          SharedModule,
          RouterTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [
          { provide: VehiculoService, useClass: CategoriesMockService },
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                paramMap: convertToParamMap({
                  id: '1',
                }),
              },
            },
          },
        ],
      }).compileComponents(); // necesario cuando se prueban componentes cuando se trabaja con servicios no es necesario
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent); // instancia
    vehiculoservice = TestBed.inject(VehiculoService);
    component = fixture.componentInstance; // traernos al componente
    fixture.detectChanges(); // algun input o data inicializada? llama a detect changes - probar la informacion en pantalla es parte de e2e
    // location = TestBed.get(Location);
    // route = TestBed.inject(Router)
  });
  it('✅✅✅✅✅✅ El componente se debe instanciar ', fakeAsync(async () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ListarVehiculosComponent);
    tick();
  }));

  it('✅✅✅✅✅✅ Cargar el listado de Vehiculos', fakeAsync(async () => {
    spyOn(vehiculoservice, 'consultarCategorias').and.callThrough();
    component.obtenerVehiculosById();
    component.listarVehiculos.subscribe((resultado) => {
      expect(resultado.length).toBe(1); // es lo que espera la variable de categorias
    });
  }));
  it('✅✅✅✅✅✅ Cargar el listado de Vehiculos', fakeAsync(async () => {
    spyOn(vehiculoservice, 'consultarCategorias').and.callThrough();
    component.obtenerVehiculosById();
    component.listarVehiculos.subscribe((resultado) => {
      expect(resultado.length).toBe(1); // es lo que espera la variable de categorias
    });
  }));

  it('✅✅✅✅✅✅ Open Modal', () => {
    const v = (component.vehiculoCosto = 10000);
    const r = (component.vehiculoSeleccionado = '1');
    const data =
      '{_declarationLView: LComponentView_ListarVehiculosComponent(37), _declarationTContainer: Node, elementRef: ElementRef}';
    component.OpenModal(data, v, r);
    expect(component.vehiculoSeleccionado).toBeDefined();
  });
});
