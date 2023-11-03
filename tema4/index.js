//No se ha realizado con promnt para no aumentar el coste de interacción
//--------------Variables globales-------------------

//como valor estan los obbjetos que ganan al nombre del atributo
let reglasGanadores={
    "piedra":"papel",
    "papel":"tijera",
    "tijera":"piedra",    
}
//----------------Funciones--------------

//Funcion para cambiar aleatoria el color del main
function cambiadorColores(){
    let colores=['rgb(128,206,255)','rgb(255,253,128)','rgb(255,128,128)'];
    let numero=Math.floor(Math.random()*3);
    let colorBackground=colores[numero];
    console.log(numero);
    console.log(colorBackground);
    let principal=document.getElementById('main');
    principal.style.backgroundColor =colorBackground;
}
//Se encarga de sumar una al numero de partidas
function incrementarPartida(){
    numPartida=document.getElementById("numeroDePartidas");
    
    partesTexto=(numPartida.innerText).split(' ');//partesTexto=['Partida',numPartida]
    partesTexto[1]= (+partesTexto[1])+1;//Sumando una partida mas
    numPartida.innerHTML=partesTexto[0]+" "+partesTexto[1]
}
//Core de aplicación elige lo que saca el ordenador y decide quien a ganado con una secuencia de ifs
//Además se encarga de modificar un párrafo para mostrar quien ha ganado
function elegirGanador(humanoObjeto){
    
    objetos=["piedra","papel","tijera"]
    maquinaObjeto=objetos[Math.floor(Math.random()*3)];

    resultado=document.getElementById("resultado");//declarando elemento donde se escribira el resultado
    if(reglasGanadores[humanoObjeto]==maquinaObjeto){//significa que maquina pierde
        resultado.innerHTML="Has perdido con "+humanoObjeto+", la maquina tenía "+maquinaObjeto;
        
    }else if(humanoObjeto==maquinaObjeto){
        resultado.innerHTML="No ha ganado nadie "+humanoObjeto+", la maquina tenía "+maquinaObjeto;
    }else{
        resultado.innerHTML="Has ganado con "+humanoObjeto+", la maquina tenía "+maquinaObjeto;
    }

        
    
    
}
//Junta las tres funciones en una para que se puedan llamar a traves del boton
function jugar(humanoObjeto){
    cambiadorColores();
    elegirGanador(humanoObjeto);
    incrementarPartida();
}


