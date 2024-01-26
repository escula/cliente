const destinos={
    "Destinos":[
        {"Alicante":["Alicante Capital","Elche","Orihuela"]},
        {"Valencia":["Mislata","Valencia Capital","Torrent"]},
        {"Seleccione destino":['Comprar billete']}
        ]

}


const primerDestino= document.getElementById('primerdestino');

//Cambiar el destino dinamicamente
primerDestino.addEventListener("change",(e)=>{
    const etiqueta=e.target;
    const elemento=document.querySelector('option[value="'+etiqueta.value+'"]')
    const origenNombreSeleccionado=elemento.innerHTML;

    destinos["Destinos"].forEach(destino => {
        const destinoEtiqueta=document.getElementById('segundodestino');
        
        if(destino[origenNombreSeleccionado] !=null){//Cuando coincida el nombre seleccionado con el noble del json Destinos
            
            destinoEtiqueta.innerHTML="" //Eliminando cualquier contendio que esta dentro de los select 
            destino[origenNombreSeleccionado].forEach(cadaDestino => {


                let opcion=document.createElement('option');
                opcion.innerHTML=cadaDestino;
                destinoEtiqueta.appendChild(opcion)
            });

        }
    });


})
document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";


//Comprueba si el usuario tiene un nombre y por lo menos el primer apellido introducido
function estaBienNombre(nombre) {
    regx=/^(([A-z]){1,})+\s+(([A-z]){1,})+(\s+([A-z]){0,}){0,}$/;
    return regx.test(nombre);
}

document.querySelector('form').addEventListener('submit',(e)=>{
    event.preventDefault()

    //validando el nombre
    if(!estaBienNombre(document.getElementById('username').value)){
        window.alert("no ha introducido correctamente el usuario usuario tiene que tener un nombre y por lo menos el primer apellido introducido");
        return false
    }
    
    let fecha =new Date();
    
    //Comprobando el año introducido coresponde con el año actual
    if(document.getElementById('travelDate').value.split('-')[0] !=fecha.getFullYear()){
        window.alert("introduzca una fecha que contenga el año actual")
        return false
    }else{
    }
    
    //Comprobando que hay un radiobutton pulsado
    if(document.querySelector('input:checked') === null){ 
        window.alert("Pulse algun radio boton")
        return false
    }

    //Comprobando que si o si pongan la frase Madrid , estación sur fijo en origen
    if(document.getElementById('origen').value !== "Madrid , estación sur fijo"){
        window.alert("Origen es incorrecto debe poner exactamente:Madrid , estación sur fijo")
        return false
    }

    //Se introduce en el if cuando no se elige un destino
    if(document.getElementById('segundodestino').value === "Select no seleccionado" || document.getElementById('segundodestino').value === "Comprar billete"){
        window.alert("seleecione el destino")
        return false
    }

    window.alert("Se ha enviado la información correctamente")

})


