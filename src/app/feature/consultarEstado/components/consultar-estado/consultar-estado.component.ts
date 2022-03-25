import { Component, OnInit } from '@angular/core';
import { ReservaDetail } from '@consultar/shared/model/ReservaDetail';
import { ConsultasService } from '@consultar/shared/service/consultas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consultar-estado',
  templateUrl: './consultar-estado.component.html',
  styleUrls: ['./consultar-estado.component.scss']
})
export class ConsultarEstadoComponent implements OnInit {
  public listarReserva: ReservaDetail[];
  public idReserva: string;
  mostrarReserva = false;
  sinResultados = false;

  constructor(public consultaService: ConsultasService) { }

  ngOnInit(): void {

  }

  consultarReserva(){
      if (this.idReserva === undefined || this.idReserva === ''){
           Swal.fire('Por favor, digita un número de reserva válido');
           return;
    }
      this.consultaService.consultar(this.idReserva).subscribe((data) => {
      console.log(data);
      if (data.length > 0){
        this.listarReserva = data;
        this.mostrarReserva = true;
      }else{
       this.mostrarReserva = false;
        this.sinResultados = true;
      }
    });
  }

}
