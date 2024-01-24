class Usuario{
    
    constructor(nombre, password, email){
        this.nombre=nombre;
        this.password=password;
        this.email=email;
    }
}

let usuario1=new Usuario("nombre1","1234","nombre1@gmail.com");
let usuario2=new Usuario("nombre2","4321","nombre2@gmail.com");
let usuario3=new Usuario("nombre3","4444","nombre3@gmail.com");

usuarios= [usuario1,usuario2,usuario3];

usuarios.forEach(usuario => {
    for (const atributo of Object.keys(usuario)) {
        console.log(usuario[atributo]);
        
    }
    console.log("------------------------------------------------")
});