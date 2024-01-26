document.getElementById('registrationForm').addEventListener('submit',function (params) {
    //recogiendo nombres de userName e email
    let nombreUsuario=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let localStorageAlamcenado="";
    try{
        localStorageAlamcenado=localStorage.getItem('usuarios');

    }catch (error) {
        console.log(error)
    }

    if(localStorageAlamcenado){// si local storage contiene algo
        let objeto=JSON.parse(localStorageAlamcenado);
        objeto[nombreUsuario]=email;
        try {
            localStorage.setItem('usuarios',JSON.stringify(objeto))
        } catch (error) {
            console.log(error)
        }

    }else{//si local storage es null
        let usuarios={};
        usuarios[nombreUsuario]=email
        let json=JSON.stringify(usuarios)
        try{
            localStorage.setItem('usuarios',json);
        }catch (error) {
            console.log(error)
        }
    }
    
})