class Docente{

    //contructor clase Docente
    constructor(nom,apellido,edad,genero,asignatura) {
        this.nombre=nom;
        this.apellidos=apellido;
        this.edad=edad;
        this.genero=genero;
        this.asignaturas=asignatura;
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
        document.write(" Nombre"+this.nombre+" Apellidos"+this.apellidos+" Edad"+this.edad+" Genero: "+this.genero+" Asignaturas: "+this.asignaturas);
    }
}
