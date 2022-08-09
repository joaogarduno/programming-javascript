function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

let jugador = 0;
// let pc = Math.floor(Math.random()*(max - min + 1) + min);
let pc = aleatorio(1, 3);
// let min = 1;
// let max = 3;


jugador = prompt(`
    Elige el valor:
    Piedra = 1
    Papel = 2
    Tijera = 3
    `);

// Jugador y sus opciones
if(jugador == 1){
    alert('Elegiste -> Piedra');
} else if(jugador == 2){
    alert('Elegiste -> Papel');
} else if(jugador == 3){
    alert('Elegiste -> Tijera');
} else{
    alert('Perdiste!! No elegiste ningun valor ');
}

// PC y sus opciones
if(pc == 1){
    alert('PC elige Piedra');
} else if(pc == 2){
    alert('PC elige Papel');
} else if(pc == 3){
    alert('PC elige Tijera');
}

// COMBATE
if(jugador == pc){
    alert('Empate');
    // Se modifica codigo y se hace mas corto
} else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 2) || (jugador == 3 && pc == 1)){
    alert('Ganaste');
} else{
    alert('Perdiste');
}