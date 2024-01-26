

let contador=parseInt(document.getElementById('contador').innerHTML);

function anadir() {
        localStorage.setItem("contador",contador++);
        document.getElementById('contador').innerHTML=localStorage.getItem('contador');



}
document.getElementById('botonEliminar').addEventListener("click",function () {
        let numero=localStorage.getItem('contador')--
        if(numero>0){
                document.getElementById('contador').innerHTML=localStorage.getItem('contador');
        }
        
});