function guardarCookie(){
    if(document.getElementById('cookieDays').value !=null){


        const nombreCookie=document.getElementById('cookieName').value
        const valorCookie=document.getElementById('cookieValue').value
        const duracionCookie=parseInt(document.getElementById('cookieDays').value)
        
        let fechaActual=new Date()
        console.log(fechaActual)
        fechaActual.setDate(fechaActual.getDate() + duracionCookie);
        
        document.cookie =  nombreCookie+'='+valorCookie+'; expires='+fechaActual.toUTCString()
    }
}

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
