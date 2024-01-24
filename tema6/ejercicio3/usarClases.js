

let alumnos=[];
let profesores=[];

function guardarAlumno(){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let edad=document.getElementById("edad").value;
    let genero=document.getElementById("genero").value;
    let curso=document.getElementById("curso").value;
    let cudireccionrso=document.getElementById("direccion").value;  
    const alumnoNuevo=new Alumno(nombre,apellido,edad,genero,curso,cudireccionrso)
    alumnos.push(alumnoNuevo);
    console.log(alumnos)
}

function guardarProfesor(){
    let nombre=document.getElementById("nombrePro").value;
    let apellido=document.getElementById("apellidoPro").value;
    let edad=document.getElementById("edadPro").value;
    let genero=document.getElementById("generoPro").value;
    let asignatura=document.getElementById("asignaturaPro").value;
    let profesor=new Docente(nombre,apellido,edad,genero,asignatura)
    profesores.push(profesor);
}
function cambiarEdad() {
    let idAlumno=document.getElementById('AlumnoModificar').value;
    let nuevaEdad=document.getElementById('nuevaEdad').value;

    alumnos[idAlumno].modificar("edad",nuevaEdad);

}

function mostrarProfeyAlumno(){
    let profesor=document.createElement("p");
    profesor.innerHTML="Profesores: ";
    document.body.appendChild(profesor);

    profesores.forEach(profe => {
        profe.visualizar();
    });

    let alumn=document.createElement("p");
    alumn.innerHTML="Alumnos: ";
    document.body.appendChild(alumn);
    for (let index = 0; index < alumnos.length; index++) {
        let indice=document.createElement("p");
        indice.innerHTML="Alumno "+index+" :";
        document.body.appendChild(indice);
        alumnos[index].visualizar()
    }

}
