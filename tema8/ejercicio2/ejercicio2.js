const destinos={
    "Destinos":[
        {"valencia":["Elche","Orihuela"],
        "Alicante":["Valencia Capital","Torrent"]
        }]

}


const primerDestino= document.getElementById('primerdestino');
primerDestino.addEventListener("change",(e)=>{
    const etiqueta=e.currentTarget;
    const elemento=document.querySelector('option[value="'+etiqueta.value+'"]')
    const origenNombre=elemento.innerHTML;
    detinos["Destinos"].forEach(elemento => {
        elemento[origenNombre];
    });


})
document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";


