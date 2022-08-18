// iniciar juego
function startPlay(){
    // Seleccionando un elemento de HTML desde Javascript
    let btnPets = document.querySelector('#btn-pets');
    btnPets.addEventListener('click', selectPetsPlayer);
}

// Seleccionando la mascota
function selectPetsPlayer(){
    // let inputInfo = document.querySelector('#hipodoge').checked;

    // condition
    if(document.querySelector('#hipodoge').checked){
        alert('Seleccionaste "Hipodoge"');
    } else if(document.querySelector('#capipepo').checked){
        alert('Seleccionaste "Capipepo"');
    } else if(document.querySelector('#ratigueya').checked){
        alert('Seleccionaste "Ratigueya"');
    } else{
        alert('No seleccionaste ninguna mascota');
    }
    
    // alert('Seleccionaste tu peleador');
}

// Metodo para nuestro navegador al cargar el HTML
// Apenas carge nuestro HTML carge el juego
window.addEventListener('load', startPlay);