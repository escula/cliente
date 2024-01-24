const PuedeVender={
    vender(venderCantidad){
        this.cantidad=this.cantidad-venderCantidad;
    }}

class SumaStock{
    restock(cantidad){
        this.cantidad=this.cantidad+cantidad;
    }
}

class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    mostrarDetalles(){
        console.log(this.nombre,this.precio,this.cantidad);
    }
}

//Usando mixins
Object.assign(Producto.prototype,PuedeVender)

//he ncontrado la siguiente manera de hacer composicion
Object.setPrototypeOf(Producto.prototype, SumaStock.prototype);



class Electrodomestico extends Producto{
    constructor(nombre,precio,cantidad){
        super(nombre,precio,cantidad)
    }
}

let electro=new Electrodomestico("nombreProducto",123,5);
electro.mostrarDetalles();
electro.vender(1);
electro.mostrarDetalles();
electro.restock(1)
electro.mostrarDetalles();
