let libros = []; //Donde se almacenan todos los libros 

class Libro{

    #precio;
    titulo;
    autor;
    paginas;
    
    constructor(titulo,autor,paginas,precio) {

        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.#precio=precio;
        
    }

    // Getters
    get titulo() {
        return this.titulo
    }

    get autor() {
        return this.autor;
    }

    get paginas() {
        return this.paginas;
    }

    get precio() {
        return this.#precio;
    }
    
    // Setters
    set titulo(titulo1) {
        this.titulo=titulo1;
    }

    set autor(autor) {
        this.autor=autor;
    }

    set paginas(paginas) {
        this.paginas=paginas;
    }
    
    set precio(precio) {
        this.#precio=precio;
    }
    
    obtenerInformacion() {
        console.log(`Título: [${this.titulo}], Autor: [${this.autor}], Páginas: [${this.paginas}], Precio: [${this.#precio}]`)
    }

    leerPagina(){     
        // te devuelve un numero entre 1 y el numero de paginas
        let numeroPaginaALeer=parseInt(Math.random()*this.paginas+1);

        console.log('Leyendo una página ['+numeroPaginaALeer+'] de ['+this.titulo+']') //Entiendo que la pagina que se lee es de forma aleatoria ya que no lo especificas
    }

    static generarLibroAleatorio() {
        let libros={
            "nombre" : ['casa Verde','El sombrero Azul','aaaaaaaaa','ehh?','Hola','Ádio mu vuénas','Langosta?'],
            "autor" : ['Galileo Galilei', 'Monserrat Charcutero', 'Cantimplora','Desconocido','Soy yo'],
            "paginasMaximas" : 1000,
            "paginasMinimas" : 50,
            "costeMaximo" : 100,
            "costeMinimo" : 10

        }
        let nombreLibro=libros['nombre'][parseInt(Math.random()*libros['nombre'].length)];

        let autorLibro=libros['autor'][parseInt(Math.random()*libros['autor'].length)];
        
        let paginasTotalesLibro=Math.floor(Math.random()* (libros['paginasMaximas']-libros['paginasMinimas']+1)+libros['paginasMinimas']);
        
        let costeLibro=Math.floor(Math.random()* (libros['costeMaximo']-libros['costeMinimo']+1)+libros['costeMinimo']);

        return new Libro(nombreLibro,autorLibro,paginasTotalesLibro,costeLibro);
    }

    leerPropiedades() {

        //Si se quiere iterar tambien el precio se debe el siguiente array:
        //let atributosObjeto = [this.titulo,this.paginas,this.autor,this.#precio]; 
        
        //Valores que se iteran
        let atributosObjeto = [this.titulo,this.autor,this.paginas];
        let indice = 0;

        return {
            next:function(){
                if(indice < atributosObjeto.length){
                    return{value:atributosObjeto[indice++],done:false}
                }else{
                    return{done:true}
                }
            }
        }

    }

    //modifica el precio del libro asignandole un valor aletorio
    modificarPrecio() {

        let costeMaximo = 100;
        let costeMinimo = 10;
        let nuevoCosteLibro=Math.floor(Math.random()* (costeMaximo-costeMinimo+1)+costeMinimo);
        
        this.#precio=nuevoCosteLibro;

        //Mostrando por consola todos los atributos del objeto
        //interpreto que mostrar la información se refiere a mostrarla en consola igual que los metodos anteriores
        this.obtenerInformacion();
    }
}

//imprime parrafos para mostrar información pantalla
function imprimirEnResultado(frase) {
    let divResultado = document.getElementById('resultado');
    let parrafo = document.createElement('p');

    parrafo.innerHTML=frase;

    divResultado.appendChild(parrafo);
}

//Guarda un libro en el array de libro asuvez recoge del formulario los datos
function guardarLibro() {

    let titulo1 = document.getElementById('titulo').value;
    let autor1 = document.getElementById('autor').value;
    let paginas1 = document.getElementById('paginas').value;
    let precio1 = document.getElementById('precio').value;

    //Introduciendo libro el la lista de libros
    libroAIntroducir=new Libro(titulo1,autor1,paginas1,precio1);
    libros.push(libroAIntroducir);
    
    //Imprimiendo los resultados
    imprimirEnResultado('Se ha guardado el libro, para ver los datos revise la consola')
    libros[libros.length-1].obtenerInformacion();
}

//metodo que visualiza todos los libros del arrray
function visualizarLibros(){
    imprimirEnResultado('Los libros se visualizan por la consola')

    console.log('-------------mostrando todos los libros--------------');
    libros.forEach(libro => {
        libro.obtenerInformacion();
    });
}

//Encuentra el primer libro por el titulo y devuelve un tipo libro sino devuelve un String

function encontrarElLibroPoTiTulo(titulo) {
    for (const libro of libros) {
        if(libro.titulo===titulo){
            return libro;
        }
    }
    return "No existe el libro";
    
}

//Es el encargado de mostrar los atributos del titulo escrito en el formulario mediante la función de iteración next()
function iterarLibro() {
    let tituloLibro=document.getElementById('titulo').value;
    
    //Encuentra el libro por el titulo y devuelve un tipo libro sino devuelve una Cadena
    libroEncontrado = encontrarElLibroPoTiTulo(tituloLibro);


    if( libroEncontrado instanceof Libro){
        let atributos=libroEncontrado.leerPropiedades();
        // console.log(atributos);
        console.log("----------------Iterando libro---------------")


        let atributo=atributos.next() //Para obtener los primeros atributos

        while(atributo.done===false){
            console.log("valor:"+atributo.value)

            atributo=atributos.next()

        
        }
    imprimirEnResultado("Iteración imprimida por consola </br>Aolo se itera titulo, autor y paginas debido a que en el enuncionado la funcion leerPropiedad se especifica que solo debe mostrar 3 atributos iterados, apesar de que después en el punto d) se pide imprimir por iterador todas las propiedades. Por esta inconcluencia he decidido priorizar el punto en donde se especifica que es lo que tiene que hacer la funcion leerPropiedades(). </br><span style='color:red'>En el codigo de la funcion leerPropiedades se comenta lo que se debe poner en caso de querer iterar también el atributo precio <span>")
    } else {
        //Si se mete en el else dignifica que no ha enctrado el libro
        imprimirEnResultado(libroEncontrado) //muestra el resultado
    }
    
}

//Genera un libro aletorio por debajo usa la funcion de clase de Libro
function generarLibroAleatorio() {
    libros.push(Libro.generarLibroAleatorio());
    //Si se mete en el else dignifica que no ha enctrado el libro
    imprimirEnResultado("Se Ha generado un libro aleatorio") //muestra el resultado
    
}

//Cambia el precio de forma aletoria del libro el cual se especifica con el titulo del formulario
function cambiarPrecio() {
    
    let tituloLibro=document.getElementById('titulo').value;
    let libroEncontrado = encontrarElLibroPoTiTulo(tituloLibro);


    
    if( libroEncontrado instanceof Libro){
        libroEncontrado.modificarPrecio();
        imprimirEnResultado("el cambio de precio se ha realizado este se hace de manera aletoria, revise la consola para ver los valores del libro modificado")
    }else{

        //Si se mete en el else dignifica que no ha enctrado el libro
        imprimirEnResultado(libroEncontrado) //muestra el resultado
    }    
}

//Muestra una página de forma aletoria del libro especificado en el Titulo
function mostrarPagina() {

    let tituloLibro=document.getElementById('titulo').value;
    let libroEncontrado = encontrarElLibroPoTiTulo(tituloLibro);

    if( libroEncontrado instanceof Libro){
        libroEncontrado.leerPagina()
    }else{

        //Si se mete en el else dignifica que no ha enctrado el libro
        imprimirEnResultado(libroEncontrado) //muestra el resultado
    }

}

