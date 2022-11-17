// 01-javascript
// 01-variables.js

// mutable (re asignadas =) e inmutables.
var a = 1;
let b = 2;

a = 3;
b = 4;

//Inmutables
const c = 5;


//Tipos de variables (primitivas)
//String
const nombre = "Juan";
//Number
const edad = 30;
//Boolean
const tieneTrabajo = true;
//Null
const carro = null;
//Undefined
let casa;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof tieneTrabajo);
console.log(typeof carro);
console.log(typeof casa);



// TRUTY Y FALSY
// TRUTY
// 1. true
//EJEMPLOS
if(""){
    console.log("String vacío es verdadero");
} else {
    console.log("String vacío es falso"); //String vacío es falso
}

if("David"){
    console.log("String con contenido es verdadero"); //true
} else {
    console.log("String con contenido es falso");
}

if(-1){
    console.log("-1 es verdadero"); // -1 es verdadero
} else {
    console.log("-1 es falso");
}

if(0){
    console.log("0 es verdadero");
} else {
    console.log("0 es falso"); //0 es falso
}

if(null){
    console.log("null es verdadero");
} else {
    console.log("null es falso"); //null es falso
}

if(undefined){
    console.log("undefined es verdadero");
} else {
    console.log("undefined es falso"); //undefined es falso
}

//ORDEN DE IMPORTANCIA
// 1. const
// 2. let
// 3. var nunca usar el var.


//JSON
const persona = {
    nombre: "Juan",
    edad: 30,
    tieneTrabajo: true,
    ropa: {
        color: "rojo",
        talla: 40,
    },
    mascotas: ["perro", "gato"],
}
console.log(persona);

//Acceder a los valores del objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona["tieneTrabajo"]);
console.log(persona.ropa.color);

//Cambiar valores del objeto
persona.nombre = "David";
persona["edad"] = 23;
console.log(persona);

//Borra valores del objeto
delete persona.tieneTrabajo;
console.log("persona");
console.log(persona);


//VAriables por valor y por referencia
//Por valor: Son las primitivas: number, string, boolean, null, undefined
let x = 10;
let y = x;
console.log(x); //10
console.log(y); //10
y = 20;
console.log(x); //10
console.log(y); //20

//Por referencia: Son los objetos: array, object, function
const juan = {
    nombre: "Juan",
    edad: 30,
}
const david = juan;
console.log(juan); //Juan
console.log(david); //Juan
david.nombre = "David";
console.log(juan); //David
console.log(david); //David

//Clonar un objeto
const juan2 = {
    ...juan,
}

const juan3 = Object.assign({}, juan);

console.log("juan2");
console.log(juan2);
console.log("juan3");
console.log(juan3);