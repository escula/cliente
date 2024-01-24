class Usuario{
    
    constructor(nombre, password, email){
        this._nombre=nombre;
        this._password=password;
        this._email=email;

    }
    set nombre(nom){
        this._nombre=nom;
    }
    get nombre(){
        return this._nombre
    }
    set password(password){
        this._password=password;
    }
    get password(){
        return this._nombre
    }
    set email(email){
        this._email=email;
    }
    get email(){
        return this._email
    }

}
let usuarios=[]


function anadirUsuario(){
    let nombreUsuario=document.getElementById("usuario").value;
    let contra=document.getElementById("contrasena").value;
    let email=document.getElementById("email").value;

    let nuevousuario=new Usuario(null,null,null)

    //usando set para cambiar los atributos de null a los valores correspondientes
    nuevousuario.nombre=nombreUsuario;
    nuevousuario.password=contra;
    nuevousuario._email=email;

    //metiendo al susuario en el array
    usuarios.push(nuevousuario);
}

function mostrarusuario(){

    let resultado=document.getElementById("resultado");
    resultado.innerHTML=""
    //usuario -> objeto de usuario
    usuarios.forEach(usuario => {
        let imprimirUsuario=document.createElement("p");

        imprimirUsuario.innerHTML="Nombre: "+usuario.nombre+" password: "+usuario.password+" email: "+usuario.email

        resultado.appendChild(imprimirUsuario)
    });

}