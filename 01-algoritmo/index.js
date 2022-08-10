// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let pc = 2;

jugador = prompt(`
    Elige el valor:
    Piedra = 1
    Papel = 2
    Tijera = 3
    `);

// alert(`Elegiste ${jugador}`);

// CONDICIONAL
// Solo se ejecuta si la condicion se cumple
if(jugador == 1){
    alert(`Elegiste Piedra`);
} if(jugador == 2){
    alert(`Elegiste Papel`);
} if(jugador == 3){
    alert(`Elegiste Tijera`);
}
// Todo el codigo que esta dentro de las llaves depende de esta condicion sea verdad
// --------------



// Este codigo de condicional funciona pero se ve mal (el codigo anterior), entonces vamos hacer otra cosa vamos a probar ejecutarlo en cascada
// Para ejecutarlo en cascada, le decimos "Si ese no es, Si no es este otro, entonces se Hace asi", entonces analizamos el siguiente codigo..
if(jugador == 1){
    alert(`Elegiste Piedra`);
} else if(jugador == 2){
    alert(`Elegiste Papel`);
} else if(jugador == 3){
    alert(`Elegiste Tijera`);
} else{
    alert('No elegiste ninguna opcion valida');
}
