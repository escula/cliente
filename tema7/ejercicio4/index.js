function agregarBoton(){
    const imagen=document.createElement("img");
    imagen.setAttribute("src","regalo.jpg")
    imagen.style.top=parseInt(Math.random()*screen.height)+"px"
    imagen.style.left=parseInt(Math.random()*screen.width)+"px"
    document.body.appendChild(imagen);
}