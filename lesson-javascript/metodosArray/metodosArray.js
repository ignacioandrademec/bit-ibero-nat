"use strict"

/* -------------------------------------------- METODO PUSH - AGREGAR---------------*/

// push()  /* Agrega uno o mas elementos al final el arreglo */

// let misJuguetes = ["avion", "tren", "pelota"];

// console.log(misJuguetes);
// misJuguetes.push("carro", "nave espacial");
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

/* -------------------------------------------- METODO POP - ELIMINAR --------------*/

// pop()  /* Elimina el ultimo elemento del Array */

// let quitarUltimoJuguete = misJuguetes.pop();
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

/* -------------------------------------------- METODO UNSHIFT ---------------------*/

// unshift()  /* Agrega uno o mas elementos al inicio del arreglo */

// misJuguetes.unshift("nave espacial", "bate");
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

/* -------------------------------------------- METODO SHIFT  ---------------------*/

// shift()  /* Elimina el primer elemento de la lista */

// misJuguetes.shift();
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

/* -------------------------------------------- METODO SPLICE ---------------------*/

// 







/* ! -------------------------------------------- METODO LIFO  ---------------------*/

// LIFO last in, first out /* El ultimo en entrar es el primero en salir */

// let miPilaDeTareas = [];
// console.log("Este es mi pila de tareas: ")


/* ! -------------------------------------------- TAREA PENDIENTE PARA PRACTICAR------*/

/* Usar un ejemplo con los diferentes metodos Array */


/* SOLUCIÓN */

let estudiantesCurso1120 = ["Jose Andrade", "Pepito Pérez", "Carlos Tercero", "Juana de Arco", "Apolo quinto", "Eugenio Sinforoso", "Armando Rodriguez"];
let estudiantesCurso1110 = ["Paula Fonseca", "Ivone Ramirez", "Lolita Cardenas", "Rodrigo Duque", "Ricardo Susatama", "Diego Lima", "Arturo Bohorques"];

/* En el colegio Técnico Mecánica de Motos de Caldas, el estudiante Calros Tercero del curso 1120 abandona el estudio por una mudanza a otro pais, de igual manera el mismo mes dos estudiantes de intercambio llega a las aulas, para el curso 1110, adicional a esto Diego Lima es cambiado de curso por hacerle bulling a otro alumno*/

/* TAREA: 
- Eliminar del curso 1120 a Carlos Tercero
- Cambiar a Diego Lima del curso 1110 al curso 1120
- Agregar a los dos estudiantes de Intercambio "Pepa Pig" y "Ellon Musk" al curso 1110
*/

let posicionCarlos = estudiantesCurso1120.indexOf("Carlos Tercero"); /* Encuentra la posición de Carlos */
// console.log(posicionCarlos); /* Carlos esta en la posición 2 */


if (posicionCarlos !== -1) {
    let mover = estudiantesCurso1120.splice(posicionCarlos, 1)[0];
    estudiantesCurso1120.push(mover);
}

// console.log(estudiantesCurso1120);

/* --------------------------------------------------------Solución punto 1 ----------*/

let eliminarEstudiante = estudiantesCurso1120.pop()
// console.log(eliminarEstudiante);
// console.log(estudiantesCurso1120) /* Carlos Tercero eliminado */


/*-------------------------------------------------------- Solución Punto 2 ----------*/

estudiantesCurso1120.unshift("Diego Lima")
console.log("Estudiantes del curso 1120: ", estudiantesCurso1120);


/* --------------------------------------------------------Solución Punto 3 ----------*/

let eliminar1 = estudiantesCurso1110.pop()
let eliminar2 = estudiantesCurso1110.pop()

// console.log(estudiantesCurso1110); /* Elimino a los 2 ultimos ya que Diego esta de Penultimas*/

estudiantesCurso1110.unshift("Arturo Bohorquez", "Ellon Musk", "Pepa Pig")
console.log("Estudiantes del curso 1110: ", estudiantesCurso1110);








// TODO 
//! COMENTARIO DE ADVERTENCIA
//* COMENTARIO BRILLANTE
//? COMENTARIO PREGUNTA