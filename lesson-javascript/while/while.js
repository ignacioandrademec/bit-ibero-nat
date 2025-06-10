"use strict"

/* -------------------------------------------- Ejercicio # 1 -------------------------*/
/* Imprimir un número segun la condición*/

// let x = 0;

// while (x <= 5){
//     console.log("Número: " + x);
//     x++;
// }

/* -------------------------------------------- Ejercicio # 2 -------------------------*/
/* Buscar el el nombre y la edad por medio del apellido de un Array*/

// const personas = [
//     {
//         nombre: "Ana", apellido: "Perez", Edad:15
//     },
//     {
//         nombre: "Juan", apellido: "Lopez", Edad:25
//     },
//         {
//         nombre: "Paola", apellido: "Guierrez", Edad:30
//     },
//         {
//         nombre: "Jose", apellido: "Gonzalez", Edad:40
//     },
//         {
//         nombre: "Diana", apellido: "Castro", Edad:12
//     },
// ]


// let buscarEdad = 30;
// let encontrado = false;


// let i = 0;

// while (i < personas.length){
//     let personaA = personas[i]
//     i++

//     if (personaA.Edad === buscarEdad) {
//         console.log("El nombre que le pertenece es: " + personaA.nombre);
//         encontrado = true;
//     }
// }

// if(!encontrado){
//     console.log("No se encontraron coincidencias");
// }

/* -------------------------------------------- Ejercicio # 3 -------------------------*/
/* Imprimir la tabla del 2*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let multiplicador = 2;
let i = 0;

while (i<num.length){
    let numVal = num[i]
    let resultado = numVal * multiplicador;
    console.log(`${numVal} * ${multiplicador} = ${resultado}`);
    i++;
}

