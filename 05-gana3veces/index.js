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

// Variables
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0

// Instruccion
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


    // COMBATE
    // if(jugador == pc){
    // alert('Empate');
    // // Se modifica codigo y se hace mas corto
    // } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 2) || (jugador == 3 && pc == 1)){
    // alert('Ganaste');
    // } else{
    // alert('Perdiste');
    // }
    
    if(jugador == pc){
        alert('Empate');
        // Se modifica codigo y se hace mas corto
        } else if(jugador == 1 && pc == 3){
            alert('Ganaste');
            triunfos = triunfos + 1;
        } else if(jugador == 2 && pc == 1){
            alert('Ganaste')
            triunfos = triunfos + 1;
        } else if(jugador == 3 && pc == 2){
            alert('Ganaste');
            triunfos = triunfos + 1;
        } else{
        alert('Perdiste');
        perdidas = perdidas + 1;
    }
}

alert(`
    Ganaste --> ${triunfos} veces.
    Perdiste --> ${perdidas} veces.
`);


