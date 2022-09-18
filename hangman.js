//alert(palabra) muestra la palabra que debemos adivinar
//Hace que la letra ingresada 
var jugador=prompt("Ingresa tu nombre")
String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

//Nuestro array de animales
const palabras=['carpincho', 'gato', 'elefante', 'abeja', 'aguila', 'cangrejo', 'gallina',
'delfin', 'ardilla','cuy', 'gallo']

    //El valor que tomara la palabra a adivinar
    const palabra=palabras[Math.floor(Math.random()*palabras.length)]
    //La palabra se ocultara con los guiones 
    let palabraConGuiones=palabra.replace(/./g, "_ ");  //Oculta la palabra mediante "_ ". Ponemos "_ " para que se separe
    //Creamos un contador
    let intentos=0;
    //Acepta solo letras del abecedario español
    function soloLetras(e) {
        var key = e.keyCode || e.which,
            tecla = String.fromCharCode(key).toLowerCase(),
            letras = "abcdefghijklmnñopqrstuvwxyz",
            especiales = [8, 37, 39, 46],
            tecla_especial = false;
        for (var i in especiales) {
            if (key == especiales[i]) {
            tecla_especial = true;
            break;}}
        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;}}
    //Oculta la palabra mediante guiones
    document.querySelector('#letraAdivinada').innerHTML = palabraConGuiones;
    //Eventos a realizar cuando se haga clic en el boton 
    document.querySelector('#calcular').addEventListener('click',()=> {   
    //Caracter ingresado en la barra
    const letra_ingresada = document.querySelector('#letra').value;
    //Convierte la letra ingresada a minuscula
    const letraMinuscula = letra_ingresada.toLowerCase();
    //Agregamos un booleano o condicional
    let condicional = true

    for(const posicion in palabra){
        // En la condicional decimos que si la letra que tenemos es igual a la posicion donde se encuentra en guion
        if(letraMinuscula == palabra[posicion]){
            //La letra que fue ocultada por el "_ " recupera su valor de letra
            palabraConGuiones = palabraConGuiones.replaceAt(posicion*2, letraMinuscula); // se multiplica por 2 ya que lo cada posicion de la letra lo reemplamos como "_ "
            condicional = false ;
        }
    }
    // 

    if (condicional){
        intentos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(199*intentos) + 'px 0';
        if(intentos == 4){
            /*Muestra el mensaje que perdiste y ademas te muestra la palabra que debias adivinar */
            document.querySelector('#perdedor').style.display='flex';
            /*Muestra al perder la palabra */
            document.querySelector('#respuestaa').innerHTML =`${palabra}`;
        } 
    }
    else{
        if(palabraConGuiones.indexOf('_')<0){
            document.querySelector('#ganador').style.display='flex';
            document.querySelector('#jugador').innerHTML =`${jugador}`
        }
    }
    // ESTE ES EL ORIGINAL
    document.querySelector('#letraAdivinada').innerHTML = palabraConGuiones;
    /*limpia la barra para introducir el caracter */
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
    
});
function mostrarRespuesta(){
    alert(`La palabra era ${palabra}`)
    location.reload();
}




    