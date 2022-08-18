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

    // condition
    if(inputSelect1.checked){
        alert('Seleccionaste "Hipodoge"');
    } else if(inputSelect2.checked){
        alert('Seleccionaste "Capipepo"');
    } else if(inputSelect3.checked){
        alert('Seleccionaste "Ratigueya"');
    } else{
        alert('¡NO seleccionaste ninguna mascota!');
    }
}

// Metodo para nuestro navegador al cargar el HTML
// Apenas carge nuestro HTML carge el juego
window.addEventListener('load', startPlay);