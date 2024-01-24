// let elemento=getElementsByClassName("body")[0];
// console.log(elemento)
// elemento.addEventListener("load", function (event) {
//    let body= event.currentTarget
//    console.log(body);
//   });

let hola=(e)=>{
    document.getElementById("mensaje").innerText="Buenas tardes"
}
window.addEventListener("load",hola)

window.addEventListener("resize",function (evento) {
    const imagen=document.getElementById("imagen");
    console.log(this.window.innerWidth);
    if(this.window.innerWidth<500){
        imagen.setAttribute("src","gato delgado.jpg");
    }else if(this.window.innerWidth>=500 && window.innerWidth<=1000){
        imagen.setAttribute("src","gatoNormal.jpg");
    }else if(window.innerWidth>1000 ){
        imagen.setAttribute("src","gordoGato.jpg");
    }
})