let intentos = 6;
let palabra = "APPLE";
window.addEventListener('load',init)
function init(){
    console.log('esto se ejecuta solo cuando se carga la pagina web')
}
const button= document.getElementById('guess-button');
button.addEventListener('click',intentar);
function intentar(){
    console.log("Intento!")
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
function intentar(){
    const INTENTO = leerIntento();
    console.log(INTENTO)
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!</h1>")
        return INTENTO 
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
        if (intentos==0){
         terminar("<h1>PERDISTE!</h1>")
        }    
}
const input = document.getElementById("guess-input");
const valor = input.value;
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
for (let i in palabra){
	console.log(palabra[i]);
}
