//compruba si esta vacio el elemnto 
function campoCorrecto(elmentoComprobar){
    let resultado;
    if(elmentoComprobar.value !=""){
        resultado= true
    }else{
 
        let elemento=document.createElement('p');
        elemento.innerHTML="Tiene que rellenar el campo";
        elemento.style.color="red";
        elemento.setAttribute("class","error");
        elmentoComprobar.after(elemento)
        resultado = false
    
        resultado=false;
    }
    return resultado;
}

//guarda las cookies
function guardarCookie(){
        let nombreEtiqueta=document.getElementById('cookieName')
        let valorCookieEtiqueta=document.getElementById('cookieValue')
        let duracionCookieEtiqueta=document.getElementById('cookieDays')
        

        if(campoCorrecto(nombreEtiqueta) && campoCorrecto(valorCookieEtiqueta) && campoCorrecto(duracionCookieEtiqueta)){

            const nombreCookie=nombreEtiqueta.value
            const valorCookie=valorCookieEtiqueta.value
            const duracionCookie=duracionCookieEtiqueta.value
            
            let fechaActual=new Date()
            console.log(fechaActual)
            fechaActual.setDate(fechaActual.getDate() + duracionCookie);
            
            document.cookie =  nombreCookie+'='+valorCookie+'; expires='+fechaActual.toUTCString()
            
            //Eliminando los valores de cookies y los errores
            const elementosErrores=document.querySelectorAll('p[class="error"]')
            const elementosInputs=document.getElementsByTagName("input")
            console.log(elementosErrores)
            for (let index = 0; index < elementosErrores.length; index++) {
                elementosErrores[index].remove()
                
            }
            for (let index = 0; index < elementosInputs.length; index++) {
                elementosInputs[index].value=""
                
            }
            console.log("hecho")
        }
   
}

//Se encarga de mostrar las cookies por pantalla (no borra las cookies mostradas anteriormente)
function mostrarCookies() {
    const cookiesGuaredas=document.cookie.split('; ')

    cookiesGuaredas.forEach(cadacookie => {
        const nombreCookieYValorCookie=cadacookie.split('=')

        console.log(nombreCookieYValorCookie)
        const parrafo=document.createElement("p")
        parrafo.innerHTML=nombreCookieYValorCookie[0]+" = "+nombreCookieYValorCookie[1];
        document.body.appendChild(parrafo)
    });  
} 