
//Generar en localStorage la variable contador si no existe
if(!localStorage.getItem("contador")){//si no existe se genera la variable
        localStorage.setItem("contador",0);

}

//añadir un numero al contador
function anadir() {
        let contador=localStorage.getItem("contador")
        contador++
        localStorage.setItem("contador",contador);
        document.getElementById('contador').innerHTML=localStorage.getItem('contador');



}
//restar un contador y deja de restar cuando llega a 0
document.getElementById('botonEliminar').addEventListener("click",function (e) {
        let numero=localStorage.getItem("contador")
        numero--
        if(numero>=0){
                document.getElementById('contador').innerHTML=numero;
                localStorage.setItem("contador",numero);
        }

        
});