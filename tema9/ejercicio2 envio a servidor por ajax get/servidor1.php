<?php
// Verificar si se recibió el nombre en los datos enviados
if(isset($_GET['param'])) {

    // Construir el mensaje de saludo con el nombre recibido
    $mensaje = "¡Hola, " . $_GET['param'] . "!";

    // Devolver el mensaje de saludo al cliente (página web)
    echo $mensaje;
} else {
    // Si no se recibió el nombre, devolver un mensaje de error al cliente
    echo "Error: Nombre no recibido.";
}
?>
