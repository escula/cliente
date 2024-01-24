let campana=document.getElementById('boton');
let vecesTocadas=0;
campana.addEventListener('click',function name(event) {
    vecesTocadas++;
    if(vecesTocadas<12){
        let parrafo=document.getElementById('parrafo');
        parrafo.innerHTML='Campanada '+ vecesTocadas;
    }
    if(vecesTocadas===12){
        let parrafo=document.getElementById('parrafo');
        parrafo.style.color="yellow"
        parrafo.innerHTML='Feliz Año';
        event.currentTarget.parentNode.style.backgroundImage='url("fueosArtificiales.png")';
        
    }
});