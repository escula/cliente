function estaBienNombre(nombre) {
    regx=/^(([A-z]){1,})+\s+(([A-z]){1,})+\s+(([A-z]){1,})$/;
    return regx.test(nombre);
}
document.getElementById("button").addEventListener('click', function (event){
    

    document.getElementById('nombre').value
    if(estaBienNombre(document.getElementById('nombre').value)){
        
        
    }else{
        window.alert("No se ha introducido correctamente el nombre de la persona")
        return false
    }
    
    if(document.querySelector('input[name="numeroPie"]:checked')){
      
        
    }else{
        window.alert("No se ha introducido correctamente el numero de pie")
        return false
    }
   
    if(document.querySelectorAll('input:checked').length>0){
       

    }else{
        window.alert("Tienes que seleccionar por lo menos un color")
        return false
    }
    document.getElementById('nombre').value="";
    document.querySelector('input[name="numeroPie"]:checked').checked=true;
    document.querySelectorAll('input:checked').forEach(element => {
        element.checked=false;
    });
});


