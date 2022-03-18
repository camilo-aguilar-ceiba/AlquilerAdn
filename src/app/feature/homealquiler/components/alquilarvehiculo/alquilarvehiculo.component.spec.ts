
// import { Categorias } from "@alquiler/shared/model/categorias";
// import { CategoriasService } from "@alquiler/shared/service/categorias.service";
import { CategoriasService } from '@alquiler/shared/service/categorias.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync,  TestBed,  waitForAsync } from '@angular/core/testing';
import {SharedModule} from '@shared/shared.module';
import { AlquilarvehiculoComponent } from './alquilarvehiculo.component';
import { CategoriesMockService } from '@alquiler/test/homealquiler-mock.service';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';
describe('AlquilarvehiculoComponent', () => {
// Importante Las pruebas unitarias no deben ejecutar los servicios http
let fixture: ComponentFixture<AlquilarvehiculoComponent>;  // es el objeto mas grande que contiene a todo el componente
let component: AlquilarvehiculoComponent;
// const listarCategorias: Categorias[] = [new Categorias(1, 'suena', 5000), new Categorias(2, 'suena', 5000)];
let categoriaservice: CategoriasService;
// let routerSpy = {navigate: jasmine.createSpy('navigateByUrl')};
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
// let location: Location;
beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({ // para pasar las dependencias
    declarations: [
      AlquilarvehiculoComponent
    ],
    imports: [
      CommonModule,
      HttpClientTestingModule,
      SharedModule,
      
    ],
     providers: [
          { provide: CategoriasService , useClass: CategoriesMockService },
          { provide: Router, useValue: routerSpy }
     ]
  }).compileComponents(); // necesario cuando se prueban componentes cuando se trabaja con servicios no es necesario
}));

beforeEach(() => {
  fixture = TestBed.createComponent(AlquilarvehiculoComponent);
  categoriaservice = TestBed.inject(CategoriasService);
  component = fixture.componentInstance; // traernos al componente
  fixture.detectChanges(); // algun input o data inicializada? llama a detect changes - probar la informacion en pantalla es parte de e2e

  // categoriaservice=TestBed.inject(CategoriasService);
  // location = TestBed.get(Location);
});
it('✅✅✅✅✅✅ El componente se debe instanciar ', fakeAsync(async () => {
  expect(component).toBeDefined();
  expect(component).toBeInstanceOf(AlquilarvehiculoComponent);
}));


it('✅✅✅✅✅✅ Cargar el listado de categorías', fakeAsync(async () => {
  // spyOn(component.categoriasService,'consultar').and.callFake(()=>of([
  //   { id:1, nombreCategoria:'suena',precio:5000 }
  //   ])); // para pruebas en especial se utiliza se puede usar return value pero se le pasa la respuesta directamente
  spyOn(categoriaservice, 'consultar').and.callThrough(); // para llamar atraves del mock
  component.obtenerCategorias();
  component.listarCategorias.subscribe(resultado => {
    expect(resultado.length).toBeGreaterThan(0); // es lo que espera la variable de categorias
});
}));

it('✅✅✅✅✅✅ Redireccionar al usuario al listado de vehículos de una categoría ', () => {
  const id = '1';
  component.openItem(id);
  const navArgs = routerSpy.navigateByUrl.calls.first().args[0];
  expect(navArgs).toEqual(`/listarVehiculos/${id}`);
});

});
