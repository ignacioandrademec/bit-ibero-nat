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

let quitarFrutas2 = miCanasta2.splice(1,3)  // Desde el indice 1 hasta el indice 3
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


// ? ------------------------------------- METODO SORT  -------------------------------------

/* El metodo SORT, organiza los elementos de un arreglo */

let listaAlumnos = ["Victor", "Luisa", "Sebastian", "Horacio"];
console.log("Lista de Alumnos: ", listaAlumnos);

listaAlumnos.sort(); //Organiza en orden Alfabéticamente, 
console.log(listaAlumnos)

let listaNumeros = [10,2,3,6,3,8,3,1,9,23]; 
listaNumeros.sort();
console.log("Lista de numeros sin ordenar:", listaNumeros); // Para los números no los toma por que los tomo como letras

// ! ---------------------------------------------- Como organizar los números de < a >-------

listaNumeros.sort(function(a,b){
    return a-b; // El valida si a es mas pequeño que b, da un número negativo y si a es mayor que b da un numero positivo, si ponemos b-a dice internamente, si b es mas grande que a el resutlado es positivo.

    // 1-10=-9, cuando la repsuesta dio negativo, le decimos a la maquina que a es antes que b.
})

console.log("Lista de numeros menor a mayor:", listaNumeros);

// ! ---------------------------------------------- Como organizar los números de > a <-------

listaNumeros.sort(function(a,b){
    return b-a;
})

console.log("Lista de numeros mayor a menor:", listaNumeros);

// ? ----------------------------------------- REVERSE ---------------------------------------

/* Invierte el orden de los elementos de un array */

let listaNumeros2 = [1,2,3,4,5,6,7,8,9]
console.log("Lista de Números en orden: ", listaNumeros2);

listaNumeros2.reverse();
console.log("Lista de Números al revez o en espejo: ", listaNumeros2);



// ? ----------------------------------------- FOREACH ----------------------------------------

/* Ejecuta una función para cada elemento del Array */

let tareasDelDía = ["sacar la basura", "tender la cama", "lavar los platos"];

tareasDelDía.forEach(function(tarea){
    console.log("He revisado la tarea", tarea);
})


// ? ----------------------------------------- MAP -------------------------------------------

/* Crea un nuevo array con los resultados de lo que le dije que hiciera en dicha función y mantiene el array original */

let puntuacionesExamen = [80,45,90,60,70];
console.log("Puntuciónes Originales: ", puntuacionesExamen);

let mensajeDeAprobacion = puntuacionesExamen.map(function(puntuacion){
    if(puntuacion >=60){
        return "Aprobado con" + puntuacion
    }else{
        return "Reprobado con " + puntuacion
    }
})

console.log(mensajeDeAprobacion)

// ? ----------------------------------------- FILTER -----------------------------------------

/* Crea un nuevo array con todos los elementos que pasan la prueba implementada por la funcion que se le indico */

let rangosEmpleado = [
    {
        nombre: "Andrea", rango: "admin"
    },{
        nombre: "Cristian", rango: "user"
    },{
        nombre: "Diana", rango: "admin"
    },{
        nombre: "Horacio", rango: "user"
    },{
        nombre: "Jaderson", rango: "admin"
    }
];

let administradores = rangosEmpleado.filter(function(roll){
    return roll.rango === "admin";
});

console.log("Los administradores son: " , administradores);

// ! ---------------------------------------------- Ejercicio de FILTER -----------------

let listaNum = [20,9,56,8,10,11];

let filtro = listaNum.filter(function(i){
    return i <= 12;
})

console.log("Los números menores o iguales a 12 son: ", filtro);



// ? ----------------------------------------- REDUCE -----------------------------------------

/* Aplica una función a un acomulador al valor del array, esto lo hace de izq a der, ésto para reducirlo a un unico valor*/

// ! ---------------------------------------------- EJEMPLO 1 ----------------------------


let palabras = ["Hola", "Mundo", "desde", "JavaScript"];
console.log("Palabras Separadas: ", palabras);

let fraseCompleta = palabras.reduce(function(fraseConstruida, palabraActual){
    return fraseConstruida + " " + palabraActual;
});

console.log("La frase completa es: ", fraseCompleta);

// ! ---------------------------------------------- EJEMPLO 2 ----------------------------

let num2 = [100, 75, 120, 90, 50];

console.log("Puntuaciones de Cada Nivel", num2);

let totalPuntos = num2.reduce(function(acomulador, puntuacionActual){
    console.log(`Sumando ${acomulador} (lo que llevo) + ${puntuacionActual}(lo que acabo de encontrar)`);

    return acomulador + puntuacionActual;

},0)

console.log("El total de puntos es: ", totalPuntos);


// ? ----------------------------------------- FIND -----------------------------------------

/* Devuelve el valor del primer elemento que encuentre, que cumpla con el parámetro proporcionado, si no lo encuentra entonces nos entrega un undefined*/

let rangosEmpleado2 = [
    {
        nombre: "Andrea", rango: "admin"
    },{
        nombre: "Cristian", rango: "user"
    },{
        nombre: "Diana", rango: "admin"
    },{
        nombre: "Horacio", rango: "user"
    },{
        nombre: "Jaderson", rango: "admin"
    }
];

let primerRangoEncontrado = rangosEmpleado2.find(function(rol){
    return rol.rango === "user";
})

console.log("Primer rango encontrado: ", primerRangoEncontrado);


// ? -------------------------------- FINDINDEX - FILTER - FIND ---------------------------

/* Devuelve el indice del primer elemento, que encuentre que cumpla con la funcion de prueba*/


let misPeliculas = [
    {
        nombre: "Harry Potter", genero: "fantasia"
    },
    {
        nombre: "Fast and furious", genero: "accion"
    },
    {
        nombre: "Forest Gump", genero: "drama"
    },
    {
        nombre: "Misión Imposible", genero: "accion"
    },
    {
        nombre: "Lilo y Stitch", genero: "fantasia"
    },
    {
        nombre: "El señor de los anillos", genero: "fantasia"
    }
]

let indicePelicula = misPeliculas.findIndex(function(gen){
    return gen.genero === "drama"
});

let primerGenero = misPeliculas.find(function(gen){
    return gen.genero === "accion"
});

let segundoGenero = misPeliculas.filter(function(gen){
    return gen.genero === "accion"
});

console.log("La primera posición del genero de acción que se encontro fue: ", indicePelicula);
console.log("La primera coincidencia con el genero de acción que se encontro fue: ", primerGenero);
console.log("La primera posición del genero de acción que se encontro fue: ", segundoGenero);

// ? ----------------------------------------- SOME-----------------------------------------

/* Comprobar si al menos un elemento del array cumple con la condición implementada por la funcion indicada*/

let misPeliculas2 = [
    {
        nombre: "Harry Potter", genero: "fantasia"
    },
    {
        nombre: "Fast and furious", genero: "accion"
    },
    {
        nombre: "Forest Gump", genero: "drama"
    },
    {
        nombre: "Misión Imposible", genero: "accion"
    },
    {
        nombre: "Lilo y Stitch", genero: "fantasia"
    },
    {
        nombre: "El señor de los anillos", genero: "fantasia"
    }
]

let algunElemento = misPeliculas2.some(function(name){
    return name.nombre === "El señor de los anillos"
})

console.log("Existe algun elemento que se llame 'El señor de los anillos'?: ", algunElemento);


// ? ----------------------------------------- EVERY -----------------------------------------

/* Comprobar si todos los elementos del array cumplen con la condición implementada por la funcion indicada*/


let misPeliculas3 = [
    {
        nombre: "Harry Potter", genero: "fantasia"
    },
    {
        nombre: "Fast and furious", genero: "accion"
    },
    {
        nombre: "Forest Gump", genero: "drama"
    },
    {
        nombre: "Misión Imposible", genero: "accion"
    },
    {
        nombre: "Lilo y Stitch", genero: "fantasia"
    },
    {
        nombre: "El señor de los anillos", genero: "fantasia"
    }
];

let todasLasPeliculasSon = misPeliculas3.every(function(gen1){
    return gen1.nombre === "El señor de los anillos"
});

console.log("Todas las peliculas son de acción?: ", todasLasPeliculasSon);


// ? ----------------------------------------- CONCAT -----------------------------------------

/* Unir dos o mas Array, este metodo no cambia los array existentes mas bien devuelve uno nuevo con la unión minimo se pueden usar dos*/

let misJuguetes = ["Carro", "Tren", "Pelota"];

let nuevosJuguetes = ["Robot", "Bici", "Piano"];

let totalJuguetes = misJuguetes.concat(nuevosJuguetes);

console.log("En total quede con estos juguetes: ", totalJuguetes);

// ? ----------------------------------------- SLICE -----------------------------------------

/* Devuelve una copia superficial de una porcion del Array dentro de un nuevo array, tomando un rango de la posición 1 a la 4*/

let filaAmigos = ["Valentina", "Tobias", "Sebastian", "Samuel", "Nicolas"]
console.log(filaAmigos);


let amigosMedio = filaAmigos.slice(1,3);
console.log("Los amigos del medio son: ", amigosMedio);



// ? ----------------------------------------- MATH.RANDOM ----------------------------------
/* Genera Numeros en aleatorio */

console.log("Juego de Adivine el número secreto");

let numeroSecreto = Math.floor(Math.random()*10);
console.log("El número secreto es: ",numeroSecreto)

// ? ----------------------------------------- MATH.FLOOR ----------------------------------
/* Redondea Hacia ABAJO como por ejemplo: Math.floor(5.8) es 5*/

let gramosChocolate = 287.5;
let pesoBarra = 100;

let numeroBarras = Math.floor(gramosChocolate/pesoBarra);
console.log("El número de barras seria: ",numeroBarras);

// ? ----------------------------------------- MATH.CEIL ----------------------------------
/* Redondea Hacia ARRIBA como por ejemplo: Math.ceil(5.2) es 6*/

/* 10 Bombillas y necesitamos 37 bombillas */

let bombillasNecesarias = 37;
let bombillasCaja = 10;

/* Calculamos cuantas cajas necesitamos */

let cajasComprar = Math.ceil (bombillasNecesarias/bombillasCaja);
console.log("Las cajas por comprar son: ",cajasComprar);


// ? ----------------------------------------- MATH.ROUND----------------------------------
/* Redondea al mas cercano:
Math.round(5.2) = 5
Math.round(5.7) = 6
*/

// ? ----------------------------------------- MATH.ABS ----------------------------------
/* Redondea al Valor absouto:
Math.abs(-5) = 5
Math.abs(6) = 6
*/

// ? ----------------------------------------- MATH.MAX ----------------------------------
/* 
Math.max(6, 20, 35, 5, 48) = 48
*/

let numeros1 = (6, 20, 35, 5, 48);
let numerosMasGrande = Math.max(numeros1);
console.log("El número mas grande es: ", numerosMasGrande);

// ? ----------------------------------------- MATH.MIN ----------------------------------
/* 
Math.max(6, 20, 35, 5, 48) = 48
*/

let tiempo1 = 14.8;
let tiempo2 = 5.8;
let tiempo3 = 7.9;
let tiempo4 = 1.3;

let tiempoMinimo = Math.min(tiempo1, tiempo2, tiempo3, tiempo4);
console.log("El tiempo minimo es: ", tiempoMinimo);

// ? ----------------------------------------- MATH.POW ----------------------------------
/* 
Math.pow(2,3) = 2*2*2 = 8
area = (lado*lado) o lado2
*/

let ladocuadrado = 7;

let areacuadrado = Math.pow(ladocuadrado, 2);
console.log("El area del cuadrado es: ", areacuadrado);


// ? ----------------------------------------- MATH.SQRT ----------------------------------
/* 
RAIZ COMPLETAR
*/


























































// TODO -------------------------------------------- EJERCICIO EN CLASE - ARREGLOS -------

// ! -------- GESTIÓN DE UNA COLECCIÓN DE LIBROS -----------------------------------------

/* Estas desarrollando un sistema de gestión para una pequeña biblioteca. Para ello, necesitas manejar una colacción de libros, donde cada libro es un objeto con las siguientes propiedades: 

- id: Número que identifica al libro.
- titulo: El título del libro (string)
- autor: El autor del libro (string)
- añopublicacion: El año en que se publico el libro (número)
- genero: El género del libro (string)
- disponible: Un booleano que indica si el libro esta disponible para un préstamo (TRUE-FALSE)

Tu tarea es crear uno o más arrays de objetos (libros) y luego realizar las siguientes operaciones utilizando los metodos de array apropiados:

INICIALIZACIÓN: 

- Crea un array inicial de libro con al menos 5 objetos.

AGREGAR LIBROS:

- Agrega un nuevo libro al final de la colección.
- Agrega un nuevo libro al inicio de la colección.

ELIMINAR LIBROS:

- Elimina el último libro de la colección.
- Elimina el primer libro de la colección.
- Elimina un lbro especifico de la colección por su ID (debes encontrar su índice primero).

ACTUALIZAR / MODIFICAR LIBROS:

- Inserta un nuevo libro en una posición específica del array sin reemplazar un existente.
- Reemplaza uno o mas libros en una posición especifica del array.

CONSULTA Y FILTRADO:

- Crea un nuevo Array con todos los libros publicados despues del año 2000.
- Encuentra el primer libro cuyo género sea "ciencia ficción", y este disponible.
- Encuentra el índice del libro con el ID 103 (o cualquier ID que exista en tu coleeción).

*/

// ? --------------------------------------- SOLUCIÓN ------------------------------------


let coleccion =[
    {
        id:1, titulo:"Cien años de Soledad",autor:"Gabriel Garcia Marquez",añoPublicacion:1967,genero:"Fantasía",disponible:true
    },{
        id:2, titulo:"1984",autor:"George Orwell",añoPublicacion:1949,genero:"Distopía",disponible:false
    },{
        id:3, titulo:"La rebelión de las ratas",autor:"Fernando Soto",añoPublicacion:1962,genero:"Realismo",disponible:true
    },{
        id:4, titulo:"Don Quijote De la Mancha",autor:"Miguel De Cervantes",añoPublicacion:1605,genero:"Sátira",disponible:true
    },{
        id:5,titulo: "El Señor de los Anillos: La Comunidad del Anillo",autor: "J.R.R. Tolkien",añoPublicacion: 1954,genero: "Fantasía",disponible: false
    }
];

// ! -------- ADICIÓN LIBRO AL FINAL ---------------------------------------------------

coleccion.push(
    {
    id: 6,
    titulo: "El Silmarillion",
    autor: "J.R.R. Tolkien",
    añoPublicacion: 1977,
    genero: "Fantasía",
    disponible: true
    }
);
console.log("Colección, libro agregado al final: ", coleccion);

// ! -------- ADICIÓN LIBRO AL INICIO ---------------------------------------------------

coleccion.unshift(
    {
    id: 7,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupery",
    añoPublicacion: "1943",
    genero: "Literatura infantil",
    disponible: false,
    }
);
console.log("Colección, libro agregado al inicio: ", coleccion);

// ! -------- ELIMINA EL LIBRO DEL FINAL ---------------------------------------------------

coleccion.pop(
    {
    id: 6,
    titulo: "El Silmarillion",
    autor: "J.R.R. Tolkien",
    añoPublicacion: 1977,
    genero: "Fantasía",
    disponible: true
    }
);
console.log("Colección, libro eliminado al final: ", coleccion);

// ! -------- ELIMINA EL LIBRO DEL INICIO --------------------------------------------------

coleccion.shift(
    {
    id: 7,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupery",
    añoPublicacion: "1943",
    genero: "Literatura infantil",
    disponible: false,
    }
);
console.log("Colección, libro eliminado al inicio: ", coleccion);


// ! -------- ELIMINA EL LIBRO EN ESPECÍFICO / BUSCAR ID --------------------------------


let buscarId = coleccion.findIndex(function(find){
    return find.id === 3
})

console.log("Busqueda del libro con id:3 el indice es =>", buscarId);


// ! -------- ELIMINA EL LIBRO POR SU ID ------------------------------------------------
/* En la posición de indice 2 elimino 1 elemento */

let quitarid3 = coleccion.splice(2,1)  //
console.log("Mi nueva Colección es: ", quitarid3);

console.log(coleccion);

// ! -------- INSERTANDO UN NUEVO LIBRO EN LA POSICIÓN 3 ----------------------------------
/* En la posición 3 agrego 1 libro pero pongo el 0 para que no elimine ninguno */

let agregarLibros = coleccion.splice(3,0,
    {
    id: 8,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    añoPublicacion: "1963",
    genero: "Ficción",
    disponible: true
    }
);

console.log("Mi nueva colección agregando el libro id:8 queda: ", coleccion);


// ! -------- REEMPLAZANDO 1 LIBRO POR 3 ---------------------------------------------
/* En la posición 3 quiero insertar 3 libros y elimnar 1*/

let eliminaAgregaLibros = coleccion.splice(3,1, 
    {
    id: 9,
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    añoPublicacion: "2001",
    genero: "Misterio",
    disponible: true
    },
    {
    id: 10,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    añoPublicacion: "1605",
    genero: "Clásico",
    disponible: false
    },
    {
    id: 11,
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    añoPublicacion: "1981",
    genero: "Realismo mágico",
    disponible: true
    }
);

console.log("Reemplazando 1 libro para ubicar 3 mas quedando mi colección así: ", coleccion);

// ! -------- CREANDO UNA COLECCIÓN NUEVA - ---------------------------------------------

















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



