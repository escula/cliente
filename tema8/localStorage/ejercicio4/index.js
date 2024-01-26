document.getElementById('registrationForm').addEventListener('submit',function (params) {
    //recogiendo nombres de userName e email
    let nombreUsuario=document.getElementById('username').value;
    let email=document.getElementById('email').value;


    let localStorageAlamcenado=localStorage.getItem('usuarios');

    if(localStorageAlamcenado){// si local storage contiene algo
        let objeto=JSON.parse(localStorageAlamcenado);
        objeto[nombreUsuario]=email;
        localStorage.setItem('usuarios',JSON.stringify(objeto))

    }else{//si local storage es null
        let usuarios={};
        usuarios[nombreUsuario]=email
        let json=JSON.stringify(usuarios)
        console.log(json)
        localStorage.setItem('usuarios',json);
    }
    
})