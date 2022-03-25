import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '@alquiler/shared/service/vehiculo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehiculo } from '@alquiler/shared/model/vehiculo';
import { Observable } from 'rxjs';
// ModalDismissReasons
@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.scss'],
})
export class ListarVehiculosComponent implements OnInit {
  @ViewChild('myModal') myModal;
  public idcategoria: string;

  public vehiculoSeleccionado: string;
  public vehiculoCosto: number;
  public fechasReserva: [];
  title = 'appBootstrap';
  public listarVehiculos: Observable<Vehiculo[]>;
  closeResult: string;
  constructor(
    public activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
       this.obtenerVehiculosById();
  }

  obtenerVehiculosById(){
    this.idcategoria = this.activatedRoute.snapshot.paramMap.get('idcategoria');
    this.listarVehiculos = this.vehiculoService.consultarCategorias(this.idcategoria);

  }

  openModal(content, idVehiculo, vehiculoCosto) {
    this.vehiculoSeleccionado = idVehiculo;
    this.vehiculoCosto = vehiculoCosto;
    this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then();
  }

 }
