//cuando pulsas el boton de ocultar
$('#ocultarTodas').click(function(params) {
    $("img").each(function(index){
        $(this).delay(index * 200).fadeTo("normal", 0.2);
    });
})

//cuando pulsas el boton de mostrar
$('#mostrarTodas').click(function(params) {
    
    var imagenes = $("img").get().reverse();
    //get(): obtiene las img y las transforma a HTMLElements[]
    //reverse: recibe el array de HTMLElement y le da la vuelta

    $(imagenes).each(function(index) {
        //this es la imagen
        //index indice de numero
        //fadeTo es el que modifica el opacity
        $(this).delay(index * 200).fadeTo("normal", 1);
    });
})

//genera un evento para cada imagen
$('img').each(function (params) {
    //this es la imagen
    //fadeTo es el que modifica el opacity
    $(this).click(function () {
        if($(this).css("opacity")==="1"){
            $(this).fadeTo('normal',0.2)
        }else{
            $(this).fadeTo('normal',1)

        }
    })
})