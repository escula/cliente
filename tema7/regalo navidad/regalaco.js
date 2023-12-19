let objeto = document.getElementsByTagName('img')[0];
    console.log(getComputedStyle(objeto));
function mostrar(objetoAModificar) {
    
    let objeto = document.getElementsByTagName(objetoAModificar)[0];
    console.log(getComputedStyle(objeto));
    objeto.style.display="block";
}

function borrar(objetoAModificar) {
    let objeto = document.getElementsByTagName(objetoAModificar)[0];
    
    console.log(objeto);
    objeto.style.display="none";
}



