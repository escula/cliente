function mostrarInformacion(e){
    let ratonEjeX=e.clientX;
    let ratonEjeY=e.clientY;
    let tipoEvento= e.type;
    let tecla= e.key;

    e.target.innerHTML="coordernadas: "+ratonEjeX+" "+ratonEjeY+" Tipo evento "+tipoEvento+" tecla: "+tecla;
}