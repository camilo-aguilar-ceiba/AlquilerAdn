export class Categorias {
    id: number;
    nombreCategoria: string;
    precio: number;

    constructor(id: number, nombreCategoria: string, precio: number) {
        this.id = id;
        this.nombreCategoria = nombreCategoria;
        this.precio = precio;
    }
}
