//Funcion que realiza el regx para el nombre
function estaBienNombre(nombre) {
    regx=/^(([A-z]){1,})+\s+(([A-z]){1,})+\s+(([A-z]){1,})$/;
    return regx.test(nombre);
}

document.getElementById("formularioPedido").addEventListener('submit', function (event){
    event.preventDefault()

    document.getElementById('nombre').value
    if(!estaBienNombre(document.getElementById('nombre').value)){
        window.alert("No se ha introducido correctamente el nombre de la persona")
        return false
        
        
    }
    if(!document.querySelector('input[name="talla"]:checked')){
        window.alert("No se ha introducido correctamente el numero de pie")
        return false
      
        
    }
   
    if(!document.querySelectorAll('input[name="color"]:checked').length>0){
        window.alert("Tienes que seleccionar por lo menos un color")
        return false

    }
    
    let resultado="Se ha mandado los siguientes valores:";
    resultado=resultado+" "+document.getElementById('nombre').value;

    //Eliminando el nombre en el formulairo
    document.getElementById('nombre').value="";

    //borrarndo todos los input checkeados y pasado al resultado los valores
    document.querySelectorAll('input:checked').forEach(element => {
        resultado=resultado+" "+element.value
        element.checked=false;
    });

    //muestra el window alert con la frase
    window.alert(resultado)

});


