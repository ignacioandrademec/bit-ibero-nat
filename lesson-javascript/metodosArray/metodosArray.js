"use strict"

// ? -------------------------------------------- METODO PUSH - AGREGAR-----------------

// push()  /* Agrega uno o mas elementos al final el arreglo */

// let misJuguetes = ["avion", "tren", "pelota"];

// console.log(misJuguetes);
// misJuguetes.push("carro", "nave espacial");
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

// ? -------------------------------------------- METODO POP - ELIMINAR ----------------

// pop()  /* Elimina el ultimo elemento del Array */

// let quitarUltimoJuguete = misJuguetes.pop();
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

// ? -------------------------------------------- METODO UNSHIFT -----------------------

// unshift()  /* Agrega uno o mas elementos al inicio del arreglo */

// misJuguetes.unshift("nave espacial", "bate");
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);

// ? -------------------------------------------- METODO SHIFT  ------------------------

// shift()  /* Elimina el primer elemento de la lista */

// misJuguetes.shift();
// console.log("Ahora estos son todos mis juguetes son:", misJuguetes);


// ? -------------------------------------------- METODO LIFO  -------------------------

// LIFO last in, first out /* El ultimo en entrar es el primero en salir */ PUSH Y POP

// let miPilaDeTareas = [];
// console.log("Tu pila de tareas esta vacia: ")

// miPilaDeTareas.push("Lavarme los dientes");
// console.log(miPilaDeTareas);

// miPilaDeTareas.push("Asearme");
// console.log(miPilaDeTareas);

// miPilaDeTareas.push("Vestirme");
// console.log(miPilaDeTareas);

// miPilaDeTareas.push("Salir a trabajar");
// console.log(miPilaDeTareas);

// miPilaDeTareas.push("Revisar el WA de la tóxica");
// console.log(miPilaDeTareas);

// console.log("realiza las tareas de manera inversa");

// let tareaRealizada1 = miPilaDeTareas.pop();
// console.log(miPilaDeTareas);

// let tareaRealizada2 = miPilaDeTareas.pop();
// console.log(miPilaDeTareas);

// let tareaRealizada3 = miPilaDeTareas.pop();
// console.log(miPilaDeTareas);

// let tareaRealizada4 = miPilaDeTareas.pop();
// console.log(miPilaDeTareas);

// let tareaRealizada5 = miPilaDeTareas.pop();
// console.log(miPilaDeTareas);

// ? -------------------------------------------- METODO FIFO  ------------------------

// FIFO last in, first out /* LAS PRIMERAS QUE ENTRAN SON LAS first QUE SALEN*/ 


// let colaDeTareas = [];
// console.log("Tu pila de tareas esta vacia: ")

// colaDeTareas.push("Lavarme los dientes");
// console.log(colaDeTareas);

// colaDeTareas.push("Asearme");
// console.log(colaDeTareas);

// colaDeTareas.push("Vestirme");
// console.log(colaDeTareas);

// colaDeTareas.push("Salir a trabajar");
// console.log(colaDeTareas);

// colaDeTareas.push("Revisar el WA de la tóxica");
// console.log(colaDeTareas);


// let tareaR1 = colaDeTareas.shift();
// console.log("mi primera tarea fue: ", tareaR1)
// console.log(tareaR1);

// let tareaR2 = colaDeTareas.shift();
// console.log("mi primera tarea fue: ", tareaR2)
// console.log(tareaR2);

// let tareaR3 = colaDeTareas.shift();
// console.log("mi primera tarea fue: ", tareaR3)
// console.log(tareaR3);

// let tareaR4 = colaDeTareas.shift();
// console.log("mi primera tarea fue: ", tareaR4)
// console.log(tareaR4);

// let tareaR5 = colaDeTareas.shift();
// console.log("mi primera tarea fue: ", tareaR5)
// console.log(tareaR5);



// ? ------------------------------------- METODO SPLICE  ------------------------------

// Cambia el contenido de un arreglo, eliminando elementos existentes y/o añadiendo elementos en su lugar*/

// !-------------------------------------------------------------- QUITAR --------------

// MANERA 1 QUITAR - DESDE DONDE QUIERO EMPEZAR A QUITAR

let miCanasta = ["Manzana" /*0*/, "Pera"/*1*/, "Uva"/*2*/, "Banana"/*3*/, "Kiwi"/*4*/];
console.log("Mi Canasta: ", miCanasta);

let quitarFrutas = miCanasta.splice(2)  // Desde el indice 2 en adelante los elimina
console.log("Mi Nueva Canasta: ", miCanasta);

// MANERA 2 QUITAR - DESDE DONDE QUIERO EMPEZAR A QUITAR Y HASTA DONDE QUIERO UN RANGO

let miCanasta2 = ["Manzana" /*0*/, "Pera"/*1*/, "Uva"/*2*/, "Banana"/*3*/, "Kiwi"/*4*/];
console.log("Mi Canasta2: ", miCanasta2);

let quitarFrutas2 = miCanasta2.splice(1,3)  // Desde el indice 1 hatsa el indice 3
console.log("Mi Nueva Canasta2: ", miCanasta2);

// !-------------------------------------------------------------- AGREGAR --------------

let miCanasta3 = ["Manzana" /*0*/, "Pera"/*1*/, "Uva"/*2*/, "Banana"/*3*/, "Kiwi"/*4*/];
console.log("Mi Canasta3: ", miCanasta3);

// MANERA AGREGAR - 1) Desde donde quiero iniciar, 2) 0 es la cantidad que quiero quitar y que quiero añadir, 3) las frutas nuevas que quiero añadir

miCanasta3.splice(2,0,"fresa", "mango"); // Con el 0 signfica que no quiero eliminar nada más
console.log("Mi Nueva Canasta3: ", miCanasta3);


// !----------------------------------------------------- ELIMINAR Y AGREGAR --------------

let miCanasta4 = ["Manzana" /*0*/, "Pera"/*1*/, "Uva"/*2*/, "Banana"/*3*/, "Kiwi"/*4*/];
console.log("Mi Canasta4: ", miCanasta4);

// MANERA ELIMINAR Y AGREGAR - 1) Desde donde quiero iniciar, 2) Cuantas frutas quiero quitar desde esa posición, 3) Las frutas nuevas que voy a reemplazar

let frutasReemplazadas = miCanasta4.splice(1,2,"Lulo", "Papaya", "Melón");
console.log("Mi Canasta4: ", miCanasta4);











// TODO -------------------------------------------- TAREA PENDIENTE PARA PRACTICAR-------

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
// console.log("Estudiantes del curso 1120: ", estudiantesCurso1120);//-----------------


/* --------------------------------------------------------Solución Punto 3 ----------*/

let eliminar1 = estudiantesCurso1110.pop()
let eliminar2 = estudiantesCurso1110.pop()

// console.log(estudiantesCurso1110); /* Elimino a los 2 ultimos ya que Diego esta de Penultimas*/

estudiantesCurso1110.unshift("Arturo Bohorquez", "Ellon Musk", "Pepa Pig")
// console.log("Estudiantes del curso 1110: ", estudiantesCurso1110); //--------------








// TODO 
//! COMENTARIO DE ADVERTENCIA
//* COMENTARIO BRILLANTE
//? COMENTARIO PREGUNTA