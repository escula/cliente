function estaBienNombre(nombre) {
    regx=/^(([A-z]){1,})+\s+(([A-z]){1,})+\s+(([A-z]){1,})$/;
    return regx.test(nombre);
}

document.getElementById('formularioPedido').addEventListener('submit', function (event){
    event.preventDefault();

    document.getElementById('nombre').value
    if(estaBienNombre(document.getElementById('nombre').value)){
        
        
    }else{
        window.alert("No se ha introducido correctamente el nombre de la persona")
        return false
    }
    
    if(document.querySelector('input[name="talla"]:checked')){
      
        
    }else{
        window.alert("No se ha introducido correctamente el numero de pie")
        return false
    }
   
    if(document.querySelectorAll('input[type="checkbox"]:checked').length>0){

    }else{
        window.alert("Tienes que seleccionar por lo menos un color")
        return false
    }
    let resultado="Los valores enviados son: ";

    //Introduciendo el nombre en el resultado
    let nombreElegido=document.getElementById('nombre').value;
    resultado=resultado+" "+nombreElegido;

    //introduciendo el resto de valores seleccionados en el resultado
    let cosasMarcadas=document.querySelectorAll('input:checked')

    cosasMarcadas.forEach(elementos => {
        resultado=resultado+" "+elementos.value;
    });
    
    
    //Borrando los lvalores del formulario

    document.getElementById('nombre').value="";
    document.querySelectorAll('input:checked').forEach(element => {
        element.checked=false;
    });

    //Realizando el alert
    window.alert(resultado)
});


