var imagenesUsadas=[];
var tablero=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]]

let primeraCartaLevantada=null;
let cartasCompletadas=0;
let intentos=0

generarTablero()

mostrarTodasCartas();

setTimeout(() => {
    esconderTodasLasImagenes()
}, 1000);

generarEventos();



//genera de forma aletoria las tarjetas
function generarTablero(){
    imagenesUsadas=[];
    
    for (let index = 0; index < 3; index++) {

        for (let indey = 0; indey < tablero[index].length; indey++) {
            let cartaAMeter="";
            do{
                cartaAMeter=parseInt(Math.random()*6+1)+".png";

            }while(!puedesMeterLasCartas(cartaAMeter));

            imagenesUsadas.push(cartaAMeter)
            tablero[index][indey]=cartaAMeter;

            
        }
    }

    
}

//te devuelve 0 si permite introducir la carta
//te devuelve 1
function puedesMeterLasCartas(cartasUsadas){

    let repeticionesCarta=0;
    let resultado=false;
    for (let index = 0; index < imagenesUsadas.length; index++) {
        if(imagenesUsadas[index]===cartasUsadas){
            repeticionesCarta++;
        }
    }

    if(repeticionesCarta<2){
        resultado=true;
    }

    return resultado
}

//muestra todoas las cartas usdo al principio
function mostrarTodasCartas() {


    let numeroId=1;
    for (let index = 0; index < 3; index++) {
        
        for (let indey = 0; indey < tablero[index].length; indey++) {
            let elemento=document.getElementById(numeroId.toString());
            elemento.setAttribute("src","img/"+tablero[index][indey]);  

            numeroId++;
        }
    }
}

//esconder todas las iamgnes mostradas usado despues de mostrar todas las cartas
function esconderTodasLasImagenes() {

    for (let index = 1; index <= 12; index++) {
        let elemento=document.getElementById(index.toString());
        elemento.setAttribute("src","img/0.png");  
        
    }
}

//introduciendo los los eventos a cada imagen
function generarEventos() {
    let imagenes=document.getElementsByTagName("img");

    let idImagenes=1; 
    for (let indey = 0; indey < 3; indey++) {

        for (let index = 0; index < tablero[indey].length; index++) {
            addClickhandler(document.getElementById(idImagenes),indey,index);
            idImagenes++;
        }

    }
}




/***************Empieza todo lo que tiene que ver con cada casilla********************/

//metodo que se usa relaizar el escuchador
function addClickhandler(elemnto,y,x){
    elemnto.addEventListener('click',function (eventico) {

    //si es una casilla correcta no hace ninguna logica
    if(eventico.target.getAttribute("src")!="img/correcto.png"){
        eventico.target.setAttribute("src","img/"+tablero[y][x])
    

        //cuando la primera carata levantada no es null y cuando la primeraCartaLevantada no es la misma que la segunda carta pulsada
        if(primeraCartaLevantada && primeraCartaLevantada !=eventico.target ){
            
            if(existeOtroCartaIgual(eventico.target)){
                setTimeout(() => {
                    sustituirCartasLevantadasPorAciertos(eventico.target)
                    primeraCartaLevantada=null;
                    cartasCompletadas=cartasCompletadas+2;
                    completado()
                    
                }, 500);
            }else{
                setTimeout(() => {
                    darVueltaAcartaQueNocoinciden(eventico.target)
                    primeraCartaLevantada=null;
                    completado()
                }, 200);
            }
            intentos++;
            document.getElementById('try').innerText=intentos;
            
        }else{
            
            primeraCartaLevantada=eventico.target;
        }
    }
        
    })
}


function existeOtroCartaIgual(elementoPulsadoActualmente) {

    const nombreDeCartaPulsada=elementoPulsadoActualmente.getAttribute("src")
    if(nombreDeCartaPulsada===primeraCartaLevantada.getAttribute("src")){
        return true
    }
    return false
    
}


function sustituirCartasLevantadasPorAciertos(elementoPulsadoActualmente){
    elementoPulsadoActualmente.setAttribute("src", "img/correcto.png")
    
    primeraCartaLevantada.setAttribute("src", "img/correcto.png")

}

function darVueltaAcartaQueNocoinciden(elementoPulsadoActualmente){
    console.log(primeraCartaLevantada)
    elementoPulsadoActualmente.setAttribute("src", "img/0.png")
    primeraCartaLevantada.setAttribute("src", "img/0.png") 
}

function completado(){
    console.log(cartasCompletadas)
    if(cartasCompletadas===12){
        const resultado=cartasCompletadas-intentos;
        document.getElementById('result').innerHTML=resultado;
    }


}