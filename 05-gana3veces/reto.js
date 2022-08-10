// Variables
let jugador = 0;
let pc = 0;

// SCORE VARIABLE
let triunfos = 0;
let perdidas = 0;
let empates = 0;

// Refactor del Codigo usando "Funciones"
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// Funcion que retorna resultado
function eleccion(jugada){
    let resultado;

    // Jugador y sus opciones
    if(jugada == 1){
        resultado = 'Piedra';
    } else if(jugada == 2){
        resultado = 'Papel';
    } else if(jugada == 3){
        resultado = 'Tijera';
    } else{
        resultado = 'Perdiste!! No elegiste ningun valor';
    }

    return resultado;
}

function pelea(){
    // if(jugador == pc){
    //     resultpelea = "¡Empate!";
    //     // Se modifica codigo y se hace mas corto
    // } else if(jugador == 1 && pc == 3){
    //     resultpelea = "¡Ganaste!";
    //     // triunfos = triunfos + 1;
    // } else if(jugador == 2 && pc == 1){
    //     resultpelea = "¡Ganaste!";
    //     // triunfos = triunfos + 1;
    // } else if(jugador == 3 && pc == 2){
    //     resultpelea = "¡Ganaste!";
    //     // triunfos = triunfos + 1;
    // } else{
    //     resultpelea = "¡Perdiste!"
    //     // perdidas = perdidas + 1;
    // }

    if(jugador == pc){
        resultpelea = "¡Empate!";
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || jugador == 3 && pc == 2){
        resultpelea = "¡Ganaste!";
    } else{
        resultpelea = "¡Perdiste!";
    }

    alert(resultpelea);
}



// Intruccion
// Modifican el flujo del codigo
while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3);

    // Prompt
    jugador = prompt(`
    Elige el valor:
    Piedra = 1
    Papel = 2
    Tijera = 3
    `);

    // Alerts
    alert (`PC elige: ${eleccion(pc)}`);
    alert(`Tu eliges: ${eleccion(jugador)}`);

    // function call
    pelea();

    // condition
    if(resultpelea == "¡Empate!"){
        empates++;
    } else if(resultpelea == "¡Ganaste!"){
        triunfos++
    } else{
        perdidas++;
    }
}

// 
alert(`
    Ganaste --> ${triunfos} veces.
    Perdiste --> ${perdidas} veces.
    Empataste --> ${empates} veces.
`);


