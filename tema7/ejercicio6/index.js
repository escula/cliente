let estilo=[["red","white",1],["yellow","purple",1.5],["blue","black",2]];
let numeroActual=0;
function cambiarEstilas(){
    numeroActual++;
    if(numeroActual>=estilo.length){
        numeroActual=0
    }

    document.getElementById("div").style.backgroundColor=estilo[numeroActual][0]
    document.getElementById("parrafo").style.color=estilo[numeroActual][1]
    document.getElementById("parrafo").style.fontSize=estilo[numeroActual][2]+"em"

}