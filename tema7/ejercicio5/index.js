function agregarRegalo() {
    let imagen=document.createElement('img');
    
    imagen.setAttribute('src','regalo.jpg');
    imagen.style.position="relative";

    imagen.style.top=Math.random()*100+'px';
    imagen.style.left=Math.random()*100+'px';
    
    document.body.appendChild(imagen);
}
function agregarTransicion(){
    let imagenes=document.getElementsByTagName("img");

    for (const imagen of imagenes) {
        imagen.setAttribute('src','grinch.jpg');
    }
}
