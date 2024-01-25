//Funcion que realiza el regx para el nombre
function estaBienNombre(nombre) {
    regx=/^(([A-z]){1,})+\s+(([A-z]){1,})+\s+(([A-z]){1,})$/;
    return regx.test(nombre);
}

<<<<<<< HEAD
document.getElementById('formularioPedido').addEventListener('submit', function (event){
    event.preventDefault();
=======
document.getElementById("formularioPedido").addEventListener('submit', function (event){
    event.preventDefault()
>>>>>>> e31925c642e167d617110a3e29be9da05fd77b80

    document.getElementById('nombre').value
    if(!estaBienNombre(document.getElementById('nombre').value)){
        window.alert("No se ha introducido correctamente el nombre de la persona")
        return false
<<<<<<< HEAD
    }
    
    if(document.querySelector('input[name="talla"]:checked')){
      
=======
>>>>>>> e31925c642e167d617110a3e29be9da05fd77b80
        
        
    }
    if(!document.querySelector('input[name="talla"]:checked')){
        window.alert("No se ha introducido correctamente el numero de pie")
        return false
      
        
    }
   
<<<<<<< HEAD
    if(document.querySelectorAll('input[type="checkbox"]:checked').length>0){

    }else{
=======
    if(!document.querySelectorAll('input[name="color"]:checked').length>0){
>>>>>>> e31925c642e167d617110a3e29be9da05fd77b80
        window.alert("Tienes que seleccionar por lo menos un color")
        return false

    }
<<<<<<< HEAD
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
=======
    
    let resultado="Se ha mandado los siguientes valores:";
    resultado=resultado+" "+document.getElementById('nombre').value;

    //Eliminando el nombre en el formulairo
    document.getElementById('nombre').value="";

    //borrarndo todos los input checkeados y pasado al resultado los valores
>>>>>>> e31925c642e167d617110a3e29be9da05fd77b80
    document.querySelectorAll('input:checked').forEach(element => {
        resultado=resultado+" "+element.value
        element.checked=false;
    });

<<<<<<< HEAD
    //Realizando el alert
    window.alert(resultado)
=======
    //muestra el window alert con la frase
    window.alert(resultado)

>>>>>>> e31925c642e167d617110a3e29be9da05fd77b80
});


