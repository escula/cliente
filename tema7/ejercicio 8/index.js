let campana=document.getElementById('boton');
let vecesTocadas=0;
campana.addEventListener('click',function name(event) {
    vecesTocadas++;
    if(vecesTocadas<12){
        let parrafo=document.getElementById('p');
        parrafo.innerHTML='Campanada '+ vecesTocadas;
        document.body.appendChild(parrafo);
    }
    if(vecesTocadas===12){
        let parrafo=document.createElement('p');
        parrafo.innerHTML='Feliz Año';
        document.body.appendChild(parrafo);
        
    }
    event.currentTarget;
});