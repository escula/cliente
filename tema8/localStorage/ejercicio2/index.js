
function anadir() {

        localStorage.setItem("contador",toString(contador++));
        document.getElementById('contador').innerHTML=localStorage.getItem('contador')

}
