const PuedeVender={
    vender(cantidad){
        this.cantidad=-cantidad;
    }}

class Productoo{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    mostrarDetalles(){
        console.log(this.nombre,this.precio,this.cantidad);
    }
}
    

Object.assign(Producto.prototype,PuedeVender)
