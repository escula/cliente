const libroAMeter={
    "Titulo":"nombre",
    "Autor":"Adasdas",
    "anoPublicacion":"dsada",
    "genero":"324",
}
const libro={
    Titulo:"",
    Autor:"",
    anoPublicacion:"",
    genero:"",
    contructor(json){
        this.Titulo=json["Titulo"];
        this.Autor=json["Autor"];
        this.anoPub=json["anoPublicacion"];
        this.genero=json["genero"];
        return this;
    },
}
console.log(libro.contructor(libroAMeter));



// class crearJSON{
//     constructor(...valoresJSON){
        
//     }
// }