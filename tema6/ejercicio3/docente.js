class Docente{

    //contructor clase Docente
    constructor(nom,apellido,edad,genero,asignatura) {
        this.nombre=nom;
        this.apellidos=apellido;
        this.edad=edad;
        this.genero=genero;
        this.asignaturas=asignatura;
    }

    //Modifica los atributos de forma dinamica
    modificar(campoAmodificar,valor){
        for (const atributo in this) {
            if(atributo===campoAmodificar){//Cuando el nombre del atributo coincida con el atributo que queramos modificar
                this[atributo]=valor;//Cambia el valor
            }
        }
    }
    visualizar() {
        let elemento=document.createElement("p");
        elemento.innerHTML=" Nombre: "+this.nombre+" Apellidos: "+this.apellidos+" Edad: "+this.edad+" Genero: "+this.genero+" Asignaturas: "+this.asignaturas;
        document.body.appendChild(elemento);
    }
}
