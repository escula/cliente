// Crear un nuevo objeto XMLHttpRequest


function mostrar1() {
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud con el método HTTP y la URL
    xhr.open('GET', 'C:\\Users\\Alumno\\Desktop\\cliente ejercicio en clase\\tema9\\pagina1.txt', true);

    // Configurar la función de devolución de llamada que se ejecutará cuando la solicitud se complete
    xhr.onreadystatechange = function () {
    // Verificar si la solicitud se ha completado y el estado de la respuesta HTTP es 200 (OK)
    if (xhr.readyState === 4 && xhr.status === 200) {
        // La respuesta del servidor estará en xhr.responseText
        console.log(xhr.responseText);
    }
    };

    // Enviar la solicitud al servidor
    xhr.send();

}