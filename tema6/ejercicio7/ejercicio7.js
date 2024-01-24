const libroAMeter={
    "Titulo":"Quijote",
    "Autor":"menganito",
    "anoPublicacion":"3213",
    "genero":"Drama",
}
const libro={
    Titulo:"",
    Autor:"",
    anoPublicacion:0,
    genero:"",
    contructor(json){
        this.Titulo=json["Titulo"];
        this.Autor=json["Autor"];
        this.anoPublicacion=json["anoPublicacion"];
        this.genero=json.genero;
        return this;
    },
}
let librito=libro.contructor(libroAMeter);
console.log("Titulo: ["+libro.Titulo+"]")
console.log("Autor: ["+libro.Autor+"]")
console.log("Año: ["+libro.anoPublicacion+"]")
console.log("Género: ["+libro.genero+"]")