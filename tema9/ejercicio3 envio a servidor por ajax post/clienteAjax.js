document.getElementById('formulario')
.addEventListener('submit',function (evento) {
    evento.preventDefault(); //desactiva el envento por defecto

    const nombreUsuario=document.getElementById('parametro').value

    var xhttp = new XMLHttpRequest();//permite crear una nueva request
    
    xhttp.onreadystatechange = function () { //definimos una unción que se ejecutara cuando se reciba correctamente
        
        // Verificar si la solicitud se ha completado y el estado de la respuesta HTTP es 200 (OK)
        //this es lo mismo que poner xhttp
        if (this.readyState === 4 && this.status === 200) {
            // La respuesta del servidor estará en xhr.responseText
            document.getElementById('resultado').innerHTML=xhttp.responseText;
        }
    };
    
    
    //open especifica el tipo de funcion que se envia, y true es para que se maneja asincronicamente
    xhttp.open("POST", "servidor2.php", true); //si se pone false no se puede poner antes del onredy ya que la llamada ya nos e realiza asincronamente prodciendo que el onredy nunca se ejecute cuando debe
    

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var datosEnviar = JSON.stringify({ nombre: nombreUsuario});  

    // Enviar la solicitud al servidor
    xhttp.send(datosEnviar);
})