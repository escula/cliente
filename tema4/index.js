//como valor estan los obbjetos que ganan al nombre del atributo
let reglasGanadores={
    piedra:"papel",
    papel:"tijera",
    tijera:"piedra",
    
}

function cambiadorColores(){
    let colores=['rgb(128,206,255)','rgb(255,253,128)','rgb(255,128,128)'];
    let numero=Math.floor(Math.random()*3);
    let colorBackground=colores[numero];
    console.log(numero);
    console.log(colorBackground);
    let principal=document.getElementById('main');
    principal.style.backgroundColor =colorBackground;
}

function elegirGanador(humanoObjeto){
    
    objetos=["piedra","papel","tijera"]
    maquinaObjeto=objetos[Math.floor(Math.random()*3)];

    resultado=document.getElementById("resultado");//declarando elemento donde se escribira el resultado
    if(reglasGanadores[humanoObjeto]==maquinaObjeto){//significa que maquina pierde
        
        resultado.innerHTML("Has ganado con"+humanoObjeto+", la maquina tenía"+maquinaObjeto)
    }else{
        resultado.innerHTML("Has perdido con"+humanoObjeto+", la maquina tenía"+maquinaObjeto)
    }
        
    
    
}

function jugar(humanoObjeto){
    cambiadorColores();
    elegirGanador(humanoObjeto);
}


