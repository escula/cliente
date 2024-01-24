class Usuario{
    
    constructor(nombre, password, email){
        this.nombre=nombre;
        this.password=password;
        this.email=email;
    }
}

let usuarios=[]


function anadirUsuario(){
    let nombreUsuario=document.getElementById("usuario").value;
    let contra=document.getElementById("contrasena").value;
    let email=document.getElementById("email").value;

    usuarios.push(new Usuario(nombreUsuario,contra,email));
}

function mostrarusuario(){

    let resultado=document.getElementById("resultado");
    resultado.innerHTML=""
    //usuario -> objeto de usuario
    usuarios.forEach(usuario => {
        let imprimirUsuario=document.createElement("p");

        for (const atributo of Object.keys(usuario)) {
            imprimirUsuario.innerHTML=imprimirUsuario.innerHTML+" "+usuario[atributo];

        }
        resultado.appendChild(imprimirUsuario)
    });

}