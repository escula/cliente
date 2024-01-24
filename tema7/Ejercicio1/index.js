const colores=["white","red","blue","green","orange","pink","yellow"]

const cambiarColores= function(){

    const numeroRandom=parseInt(Math.random()*colores.length);
    document.body.style.backgroundColor=colores[numeroRandom]
}