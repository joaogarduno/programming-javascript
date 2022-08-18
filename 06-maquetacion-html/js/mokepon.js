// iniciar juego
function startPlay(){
    // Seleccionando un elemento de HTML desde Javascript
    let btnPets = document.querySelector('#btn-pets');
    btnPets.addEventListener('click', selectPetsPlayer);
}

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

    // Llamando a la funcion de seleccion de mascota del enemigo despues de seleccionar la mascota del jugador
    selectPetsEnemy();
}

// Funcion de la seleccion de mascota del enemigo
function selectPetsEnemy(){
    // guardando el numero aleatorio
    let randomAttack = aleatorio(1, 3);

    // variable para guardar el valor de la mascota, es decir la mascota elegida por la PC
    let spanPetEnemy = document.querySelector('#petEnemy');

     // Lugar o accion donde podamos decirle a nuestro codigo que nos diga cual es la variable o mascota que selecciona la PC
    if(randomAttack == 1){
        spanPetEnemy.innerHTML = '<strong>Hipodoge</strong>'
    } else if(randomAttack == 2){
        spanPetEnemy.innerHTML = '<strong>Capipepo</strong>';
    } else{
        spanPetEnemy.innerHTML = '<strong>Ratigueya</strong>';
    }

   
}

// Funcion para dar un valor aleatorio en la seleccion de mascota del enemigo o de la PC
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// Metodo para nuestro navegador al cargar el HTML
// Apenas carge nuestro HTML carge el juego
window.addEventListener('load', startPlay);