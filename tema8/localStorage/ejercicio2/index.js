

let contador=parseInt(document.getElementById('contador').innerHTML);
function anadir() {
        console.log(contador)
        console.log(typeof(contador));
        localStorage.setItem("contador",contador++);

        console.log(typeOf(localStorage.getItem('contador')))
        // document.getElementById('contador').innerHTML=toString(localStorage.getItem('contador'));



}
