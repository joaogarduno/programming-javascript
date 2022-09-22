// Creamos una variable global
// Aqui guardamos el ataque que este teniendo nuestros jugadores en cada uno de sus lanzamientos de sus turnos para atacar
// esta variable esta por fuera de todas nuestras funciones, asi que todas esas funciones van a poder tener acceso a esta variable que es "global"
let attackPlayer;
let attackEnemy;

// creamos 2 variables globales, 1 para las vidas del jugador y otra para la vida del enemigo
let petPlayerLife = 3;
let petEnemyLife = 3;



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



// FUNCIONES - ATAQUES JUGADOR SELECCIONADO POR JUGADOR
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


// Necesitamos revisar las vidas antes de que podamos lanzar un nuevo ataque tenemos que revisar si ya perdimos o si alguna de las mascotas ya murio o se le acabaron las vidas, es decir tiene 0 (cero) vidas para permitirnos lanzar un nuevo ataque

// FUNCION - RESULTADO DE ATAQUE Ó COMBATE
// Aqui esta la logica para saber si perdimos, ganamos o empatamos
function resultAttack(){
    // En esta funcion tiene mas sentido llamar a nuestras etiquetas <span> para cambiar la cantidad de vidas de nuestras mascotas que vamos a mostrar a nuestro jugador o nuestro enemigo.
     // EVENTOS DE VIDAS DE LAS MASCOTAS
     let spanLifePet = document.querySelector('#petLifePlayer');
     let spanLifeEnemy = document.querySelector('#petLifeEnemy');

    //  Condicionales de combate o de ataque
    if(attackPlayer == attackEnemy){
        resultFight = 'EMPATASTE 😒';
    } else if((attackPlayer == 'Agua' && attackEnemy == 'Fuego') || (attackPlayer == 'Tierra' && attackEnemy == 'Fuego') || (attackPlayer == 'Tierra' && attackEnemy == 'Agua')){
        resultFight = 'GANASTE 🎉';
        // En el caso de que hayamos perdido decirle el numero de vidas despues de perder o ganar
        petEnemyLife--;
        // Las variables creadas para las vidas de nuestras mascotas las llamaremos cuando perdamos y perderemos vidas
        spanLifeEnemy.innerHTML = petEnemyLife;
    } else if((attackPlayer == 'Fuego' && attackEnemy == 'Agua') || (attackPlayer == 'Fuego' && attackEnemy == 'Tierra') || (attackPlayer == 'Agua' && attackEnemy == 'Tierra')){
        resultFight = 'PERDISTE 😥';
        // En el caso de que hayamos perdido decirle el numero de vidas despues de perder o ganar
        petPlayerLife--;
        // Las variables creadas para las vidas de nuestras mascotas las llamaremos cuando perdamos y perderemos vidas
        spanLifePet.innerHTML = petPlayerLife;
    } else{
        resultFight = 'No elegiste un tipo de Ataque';
    }

    // Cuando terminemos esta logica, entonces es aqui donde vamos a revisar las vidas, no queremos hacerlo antes de que suceda el combate, porque en realidad antes de comenzar el combate vamos a tener vidas, ambos bandos van a tener vidas
    // Revisar vidas
    reviewLives();
}



// FUNCION - REVISAR VIDAS
// Esta funcion debe de ir a las variables "petPlayerLife" y "petEnemyLife" para revisar sus vidas y preguntar si estan en cero, es decir si estan en cero las del jugador entonces gano el enemigo y si es el enemigo entonces eso significa que gano el jugador
function reviewLives(){
    // hacemos condicional para preguntar si las vidas del enemigo son cero "0", es decir, si llegamos a cero aqui debemos anunciar que ganamos, "gano la mascota de nuestro jugador", pero que pasa si las vidas de nuestro enemigo no son cero "0" en ese caso tenemos otra validacion
    if(petEnemyLife == 0){
        // ganaste, agregamos el texto de victoria
        createFinalMessage('Felicidades ganaste la batalla mas esperada!!! 🏆️');
    } else if(petPlayerLife == 0){
        // Si esto llegara a ser verdad significa que PERDIMOS
        createFinalMessage('Lo sentimos has perdido la batalla 😭');
    } //else{
        // Pero si ninguna de las condiciones anteriores se cumple ambas mascotas estan listas para seguir combatiendo, por lo tanto si tenemos este "else", no tendriamos que hacer nada mas en realidad, debemos dejar que nuestro juego fluya normalmente
    //}
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


// FUNCIÓN - MENSAJE FINAL - JUEGO TERMINADO
function createFinalMessage(finalResult){
    // Entonces lo que necesitamos es crear un nuevo mensaje, asi que la mayoria de esta logica si que la podemos reutilizar
    let messageSection = document.querySelector('#message-attack');

    let paragraph = document.createElement('p');

    // Cambiamos el mensaje por uno nuevo
    // para crear este nuevo mensaje necesitamos un nuevo "parametro" para que nos diga si perdimos o ganamos, porque en este caso no hay empate, solo necesitamos que nos diga un mensaje que nuestra mascota se quedo sin vida
    paragraph.innerHTML = finalResult;
    messageSection.appendChild(paragraph);
}


// Funcion para dar un valor aleatorio en la seleccion de mascota del enemigo o de la PC
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}



// Metodo para nuestro navegador al cargar el HTML
// Apenas carge nuestro HTML carge el juego
window.addEventListener('load', startPlay);