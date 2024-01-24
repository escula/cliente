



let accicionCuandoHayevento= function(e){
    let ratonEjeX=e.clientX;
    let ratonEjeY=e.clientY;
    let tipoEvento= e.type;
    let tecla= e.key;
    
    e.target.innerHTML="coordernadas: "+ratonEjeX+" "+ratonEjeY+" Tipo evento "+tipoEvento+" tecla: "+tecla;
}
document.getElementById("miObjeto").addEventListener("click",accicionCuandoHayevento)
document.getElementById("miObjeto").addEventListener("keydown",accicionCuandoHayevento)
