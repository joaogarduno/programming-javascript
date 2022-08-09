let jugador = 0;
let pc = 2;

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
// for(pc = 0; pc <= 3; pc++){
//     if(pc == 1){
//         alert('PC elige Piedra');
//     } else if(pc == 2){
//         alert('PC elige Papel');
//     } else if(pc == 3){
//         alert('PC elige Tijera');
//     }    
// }

if(pc == 1){
    alert('PC elige Piedra');
} else if(pc == 2){
    alert('PC elige Papel');
} else if(pc == 3){
    alert('PC elige Tijera');
}

// COMBATE
if(pc == jugador){
    alert('Empate');
} else if(jugador == 1 && pc == 3){
    alert('Ganaste');
} else if(jugador == 2 && pc == 1){
    alert('Ganaste');
} else if(jugador == 3 && pc == 2){
    alert('Ganaste');
} else{
    alert('Perdiste');
}