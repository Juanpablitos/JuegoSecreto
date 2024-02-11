let numeroSecreto;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    // ya sorteamos todos los numeros??
    if (numerosSorteados.length == numeroMaximo){
asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    } else {
    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); // Genera otro número si ya ha sido sorteado
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if (numeroUsuario === numeroSecreto) { 
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}!`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
    }
    intentos++;
    limpiarCaja();
}

function mensajesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p",` indica un numero del 1 al ${numeroMaximo}`)
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Reiniciar lista de números sorteados
    numerosSorteados = [];
    // Indicar el intervalo de números
    mensajesIniciales();
    // Generar nuevo número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Habilitar botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", false);
    // Reiniciar número de intentos
    intentos = 1;
    //deshabilitar al presionar
    
}

// Iniciar juego
mensajesIniciales();
numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
reiniciarJuego();
