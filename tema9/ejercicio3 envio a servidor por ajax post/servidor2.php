<?php
// Verificar si se recibieron datos en formato JSON en la solicitud POST
$data = json_decode(file_get_contents("php://input"));

//Verificar si se recibió el nombre en los datos enviados
if(isset($data->nombre)) {
    // Obtener el nombre recibido
    $nombre = $data->nombre;

    // Construir el mensaje de saludo con el nombre recibido
    $mensaje = "¡Hola, " . $nombre . "!";

    // Devolver el mensaje de saludo al cliente (página web)
    echo $mensaje;
} else {
    // Si no se recibió el nombre, devolver un mensaje de error al cliente
    echo "Error: Nombre no recibido.";
}
?>
