"use strict"

//? --------------------------------------- FUNCIÓN SENCILLA -------------------------------

function saludar(nombre){
    console.log ("Hola: "+ nombre);
}

// saludar("Ivone");
// saludar("Nacho")

//? ---------------------------------- FUNCIÓN (OPERATOR) + RETURN ---------------------------

function suma(num1, num2){
    return num1 + num2  /* Solicito que retorne la función */
};

// console.log("La suma de los dos números es: ", suma(1,2)); /* Imprimo en la consola la función con los numeros donde di los parametros que va a tomar cunado yo llame a la función*/

//? ---------------------------------- FUNCIÓN (OPERATOR) + IMPRIMIR -------------------------

function resta(num1, num2){
    let resta = num1 - num2
    console.log(`La resta de ${num1} menos ${num2} es igual a: `, resta);
};

// resta(5,3);

//? ---------------------------- FUNCIÓN (MULTIPLICACIÓN) + IMPRIMIR -------------------------

function mult (num1,num2){
    let resultado = num1*num2;
    console.log(resultado);
}

// mult(5,5)


//? ---------------------------- HOISTING EN FUNCIONES DECLARADAS ---------------------------

/* las puedo llamar antes de indicar que deben hacer */

hoisting();
function hoisting(){
    console.log("Hola soy una función que se llamo antes")
}

console.log(multiplicar(5,3,9));

function multiplicar(num1,num2,num3){
    return num1 * num2 * num3
}

//? ---------------------------------- FUNCTION EXPRESSION ---------------------------------

const miFuncionExp = function(mensaje){
    console.log("Mensaje desde la expresión: " + mensaje);
};

miFuncionExp("Soy una expresión")

//? --------------------------- FUNCIONES COMO EXPRESIONES NOMBRADAS------------------------

const factorial = function calcularFactorial (n){
    if (n === 0 || n ===1){
        return 1;
    }
    return n * calcularFactorial(n-1);
}

console.log("Factorial: ", factorial(6));

/* Repetir el video para ver el funcionamiento de las operaciones */


//? --------------------------------------- CALL - BACKS ----------------------------------
/*  */




























// TODO 
//! COMENTARIO DE ADVERTENCIA
//* COMENTARIO BRILLANTE
//? COMENTARIO PREGUNTA