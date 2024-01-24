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


function cambiarFrase(){
    const palabrasAusuar="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae nesciunt adipisci. Cumque aperiam unde autem voluptatem aliquam voluptatibus sint culpa assumenda non temporibus eius modi doloribus, harum amet. Provident.".split(" ")
    let fraseFormada="";
    for (let index = 0; index < 5; index++) {
        fraseFormada=fraseFormada+palabrasAusuar[parseInt(Math.random()*palabrasAusuar.length)]+" "
    }

    document.getElementById("parrafo").innerText=fraseFormada;
    
}