// Recuperar los elementos del DOM que nos interesan
// const boton = document.querySelector('button');
// const envoltorio = document.querySelector('.envoltorio-popup');
// const cerrar = document.querySelector('.cerrar-popup');

// // EVENTOS
// // click sobre el boton para mostrar el popup
// boton.addEventListener('click', () => {
//     envoltorio.style.display = "block";
// });

// //click sobre el boton para cerrar el pop-up
// cerrar.addEventListener('click', () => {
//     envoltorio.style.display = "none";
// });

// //click sobre el envoltorio cerrar el popup

// envoltorio.addEventListener('click', () => {
//     envoltorio.style.display = "none";
// });

// Recuperar los elementos del DOM que nos interesan
const boton = document.getElementsByTagName('button');
// console.log(boton);
const envoltorio = document.getElementsByClassName('envoltorio-popup');
// console.log(envoltorio);
const cerrar = document.getElementsByClassName('cerrar-popup');
// console.log(cerrar);

// EVENTOS
// click sobre el boton para mostrar el popup
boton[0].addEventListener('click', () => {
    envoltorio[0].style.display = "block";
});

//click sobre el boton para cerrar el pop-up
cerrar[0].addEventListener('click', () => {
    envoltorio[0].style.display = "none";
});

//click sobre el envoltorio cerrar el popup

envoltorio[0].addEventListener('click', () => {
    envoltorio[0].style.display = "none";
});