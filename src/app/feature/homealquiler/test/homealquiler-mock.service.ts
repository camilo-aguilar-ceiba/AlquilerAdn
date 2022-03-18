import { Categorias } from '@alquiler/shared/model/categorias';
import { Reserva } from '@alquiler/shared/model/reserva';
import { Vehiculo } from '@alquiler/shared/model/vehiculo';
import { Observable, of } from 'rxjs';

export class CategoriesMockService {
    consultar(): Observable<Categorias[]> {
       return of([
        {id: 1, nombreCategoria: 'GOLD', precio: 5000 },
        {id: 2, nombreCategoria: 'PREMIUM', precio: 5000 },
        {id: 3, nombreCategoria: 'BASIC', precio: 5000 }
           ]);
    }
    consultarCategorias(id): Observable<Vehiculo[]>{
        console.log(id);
        return of([
            { id: 1, marcaVehiculo: 'Renault', modelo: 2020, placa: 'AGUI78', color: 'azul', urlimagen: 'https://www.svgimages.com/svg-image/s6/car-left-side-256x256.png', categoria: 2}
        ]);
    }

    reservar(): Observable<Reserva[]>{
        return of([
            {
                usuarioid: '1',
                costo: 450000,
                fechaReserva: '2022-03-18',
                vehicleId: '2',
                idRadicado: '64ngb8yfhsw',
                estado: 'pendiente',
                id: 1
              }
        ]);
    }

    consultarDisponibilidad(fecha): Observable<any>{
        if (fecha === '2022-03-18'){
            return of([
                {
                    id: 2,
                    marca_vehiculo: 'Renault',
                    modelo: 2020,
                    placa: 'AGUI78',
                    color: 'azul',
                    urlimagen: 'https://www.svgimages.com/svg-image/s6/car-left-side-256x256.png',
                    categoria: 2,
                    costo: 500000,
                    reserva: [
                      {
                        usuarioid: 1,
                        costo: 450000,
                        fechaReserva: '2022-03-18',
                        vehicleId: 2,
                        idRadicado: '64ngb8yfhsw',
                        estado: 'pendiente',
                        id: 1
                      }
                    ]
                  }
            ]);
        }else{
            return of([
                {
                    id: 2,
                    marca_vehiculo: 'Renault',
                    modelo: 2020,
                    placa: 'AGUI78',
                    color: 'azul',
                    urlimagen: 'https://www.svgimages.com/svg-image/s6/car-left-side-256x256.png',
                    categoria: 2,
                    costo: 500000,
                    reserva: []
                  }
            ]);
        }

    }

    navigateByUrl(url: string) { return url; }
}
