// Creamos una variable global
// Aqui guardamos el ataque que este teniendo nuestros jugadores en cada uno de sus lanzamientos de sus turnos para atacar
// esta variable esta por fuera de todas nuestras funciones, asi que todas esas funciones van a poder tener acceso a esta variable que es "global"
let attackPlayer;
let attackEnemy;


// FUNCION - INICIAR JUEGO
function startPlay(){
    // Seleccionando un elemento de HTML desde Javascript
    let btnPets = document.querySelector('#btn-pets');
    btnPets.addEventListener('click', selectPetsPlayer);


    // EVENTOS ESCUCHADOS DE LOS BOTONES
    // Seleccionando ataques
    let btnFire = document.querySelector('#btn-fire');
    btnFire.addEventListener('click', attackFire);

    let btnWater = document.querySelector('#btn-water');
    btnWater.addEventListener('click', attackWater);

    let btnEarth = document.querySelector('#btn-earth');
    btnEarth.addEventListener('click', attackEarth);
}

// FUNCION - JUGADOR
// Seleccionando la mascota
function selectPetsPlayer(){
    // let inputInfo = document.querySelector('#hipodoge').checked;
    let inputSelect1 = document.querySelector('#hipodoge');
    let inputSelect2 = document.querySelector('#capipepo');
    let inputSelect3 = document.querySelector('#ratigueya');

    // Muestra mascota del jugador en el HTML
    let spanPetPlayer = document.querySelector('#petPlayer');

    // condition
    if(inputSelect1.checked){
        // alert('Seleccionaste "Hipodoge"');
        spanPetPlayer.innerHTML = '<strong>Hipodoge</strong>';
    } else if(inputSelect2.checked){
        spanPetPlayer.innerHTML = '<strong>Capipepo</strong>';
    } else if(inputSelect3.checked){
        spanPetPlayer.innerHTML = '<strong>Ratigueya</strong>';
    } else{
        alert('¡NO seleccionaste ninguna mascota!');
    }

    // Despues de todos las condicionales u opciones del jugador que debe seleccionar y una vez que lo haya hecho, justo despues de esto mandamos a llamar al funcion del "enemigo"
    // Llamando a la funcion de seleccion de mascota del enemigo despues de seleccionar la mascota del jugador
    selectPetsEnemy();
}

// FUNCION - ENEMIGO O PC
// Funcion de la seleccion de mascota del enemigo
function selectPetsEnemy(){
    // guardando el numero aleatorio
    let randomPets = aleatorio(1, 3);

    // variable para guardar el valor de la mascota, es decir la mascota elegida por la PC
    let spanPetEnemy = document.querySelector('#petEnemy');

     // Lugar o accion donde podamos decirle a nuestro codigo que nos diga cual es la variable o mascota que selecciona la PC
    if(randomPets == 1){
        spanPetEnemy.innerHTML = '<strong>Hipodoge</strong>'
    } else if(randomPets == 2){
        spanPetEnemy.innerHTML = '<strong>Capipepo</strong>';
    } else{
        spanPetEnemy.innerHTML = '<strong>Ratigueya</strong>';
    }   
}




// FUNCIONES - ATAQUES JUGADOR
// Con estas funciones de Fuego, Agua y Tierra vamos a modificar la variable global llamada "attackPlayer" o "ataqueJugador"
function attackFire(){
    // Dentro de esta funcion asignamos un valor a la variable global
    attackPlayer = 'Fuego'
    randomAttackEnemy();
}
function attackWater(){
    // Dentro de esta funcion asignamos un valor a la variable global
    attackPlayer = 'Agua';
    randomAttackEnemy();
}
function attackEarth(){
    // Dentro de esta funcion asignamos un valor a la variable global
    attackPlayer = 'Tierra';
    randomAttackEnemy();
}



// FUNCION - ATAQUE ENEMIGO ALEATORIO
function randomAttackEnemy(){
    // Le decimos a la variable "attackEnemy" "ataqueEnemigo" cual es el ataque que queremos poner, para eso necesitamos la "aleatoriedad"
    let randomAttack = aleatorio(1, 3);

    // a través de nuestros condicionales decirle a la variable global "attackEnemy" sea igual a "fuego", "agua" o "tierra"
    if(randomAttack == 1){
        // Si el ataque global es igual a 1, entonces le decimos a la variable global "attackEnemy" le decimos que sea igual al valor del tipo de ataque (fuego, agua o tierra)
        attackEnemy = 'Fuego';
    } else if(randomAttack == 2){
        attackEnemy = 'Agua';
    } else if(randomAttack == 3){
        attackEnemy = 'Tierra';
    } else{
        attackEnemy = 'No elegiste un poder para poder atacar a tu oponente';
    }

    // Mandamos a llamar a la funcion "resultAttack" entes de mandar a llamar a la función "createMessage", para que la variable "resultFight" que almacena la función "resultAttack" tenga un valor establecido.
    resultAttack();

    // Cuando ya tengamos los dos tipos de ataques, ya podemos crear nuestro mensaje
    createMessage();
}


// FUNCION - RESULTADO DE ATAQUE
function resultAttack(){
    if(attackPlayer == attackEnemy){
        resultFight = 'EMPATASTE 😒';
    } else if((attackPlayer == 'Agua' && attackEnemy == 'Fuego') || (attackPlayer == 'Tierra' && attackEnemy == 'Fuego') || (attackPlayer == 'Tierra' && attackEnemy == 'Agua')){
        resultFight = 'GANASTE 🎉';
    } else if((attackPlayer == 'Fuego' && attackEnemy == 'Agua') || (attackPlayer == 'Fuego' && attackEnemy == 'Tierra') || (attackPlayer == 'Agua' && attackEnemy == 'Tierra')){
        resultFight = 'PERDISTE 😥';
    } else{
        resultFight = 'No elegiste un tipo de Ataque';
    }
}



// FUNCION - MENSAJES
// Creamos nueva funcion para incertar mensajes en HTML
// ¿Cuando tenemos que mandar a llamar a esta funcion "createMessage"?
function createMessage(){
    let messageSection = document.querySelector('#message-attack');

    // Utilizamos un metodo para crear un nuevo mensaje, "crear un nuevo elemento"
    // Aqui creamos un elemento de tipo parrafo, es decir vamos a enviarle el nombre del elemento o etiqueta HTML que queremos crear con Javascript
    let paragraph = document.createElement('p');

    // Ahora lo que falta son 2 cosas:
        // 1. Dentro de este parrafo debemos meter el texto con la información de los ataques de nuestras mascotas
        // 2. Donde tiene que meter ese parrafo que vamos a crear desde JavaScript y lo agregamos con nuevo metodo

    // paragraph.innerHTML = 'Tú mascota atacó con ' + attackPlayer +  ', la mascota del enemigo atacó con ' + attackEnemy;
    paragraph.innerHTML = `Tú mascota atacó con <strong>${attackPlayer}</strong>, la mascota del enemigo atacó con <strong>${attackEnemy}</strong> -> <strong>${resultFight}</strong>`;
    messageSection.appendChild(paragraph);
}


// Funcion para dar un valor aleatorio en la seleccion de mascota del enemigo o de la PC
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// Metodo para nuestro navegador al cargar el HTML
// Apenas carge nuestro HTML carge el juego
window.addEventListener('load', startPlay);