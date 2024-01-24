class Alumno{
    //contructor clase ALumno
    constructor(nom,apellido,edad,genero,curso,direccion) {
        this.nombre=nom;
        this.apellidos=apellido;
        this.edad=edad;
        this.genero=genero;
        this.curso=curso;
        this.direccion=direccion;
    }
    modificar(campoAmodificar,valor){
        for (const key in this) {
            if(key===campoAmodificar){//Cuando el nombre del atributo coincida con el atributo que queramos modificar
                this[key]=valor;
            }
        }
        console.log(this)
    }
    visualizar() {
        let elemento=document.createElement("p");
        elemento.innerHTML=" Nombre: "+this.nombre+" Apellidos: "+this.apellidos+" Edad: "+this.edad+" Genero: "+this.genero+" Curso: "+this.curso+ " Direccion: "+this.direccion;
        document.body.appendChild(elemento);
    }
}