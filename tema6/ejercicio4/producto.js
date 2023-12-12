class SumaStock{
    restock(cantidad){
        this.cantidad=+cantidad;
    }
} 
class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        Object.assign(this,new SumaStock)
    }
    mostrarDetalles(){
        console.log(this.nombre,this.precio,this.cantidad);
    }
}
const PuedeVender={
    vender(cantidad){
        this.cantidad=-cantidad;
    }}
    

Object.assign(Producto.prototype,PuedeVender)
