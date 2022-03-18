import { CategoriasService } from '@alquiler/shared/service/categorias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categorias } from '@alquiler/shared/model/categorias';

@Component({
  selector: 'app-alquilarvehiculo',
  templateUrl: './alquilarvehiculo.component.html',
  styleUrls: ['./alquilarvehiculo.component.scss']
})
export class AlquilarvehiculoComponent implements OnInit {
  categorias: Categorias[] = [];
  public listarCategorias2: Observable<Categorias[]>;
  public listarCategorias: Observable<Categorias[]>;
  categoriasHttpTestingService: any;
  constructor( private categoriasService: CategoriasService, public router: Router
    ) { }

  ngOnInit() {
   this.obtenerCategorias();
  }
   obtenerCategorias(){
   this.listarCategorias = this.categoriasService.consultar();
  }
  openItem(id: string){
    this.router.navigateByUrl(`/listarVehiculos/${id}`);
}

}
