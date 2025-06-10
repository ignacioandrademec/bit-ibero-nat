"use strict"

/*--------------------------------------- Esructura del DO - WHILE --------------------*/

// index //Inicialización

// do{
//     proceso
//     incremento
// } while (condicion)

/* -------------------------------------------- Ejercicio # 1 DO-WHILE--------------------*/
/* Buscar el el nombre y la edad por medio del apellido de un Array*/

const personas = [
    {
        nombre: "Ana", apellido: "Perez", Edad:15
    },
    {
        nombre: "Juan", apellido: "Lopez", Edad:25
    },
        {
        nombre: "Paola", apellido: "Guierrez", Edad:30
    },
        {
        nombre: "Jose", apellido: "Gonzalez", Edad:40
    },
        {
        nombre: "Diana", apellido: "Castro", Edad:12
    },
]


let buscarEdad = 30;
let encontrado = false;


let i = 0;

do {
    let personaA = personas[i]
    if (personaA.Edad ===buscarEdad){
        console.log("El nombre que le pertenece es: " + personaA.nombre, personaA.apellido);
        encontrado = true;
    }
i++;
} while (i<personas.length){

};

if (!encontrado) {
    console.log("No se encontraron coincidencias");
}

