// 02-arreglos.js

let miArreglo = [1,"a",3,false,5,];

//for of : Valores
console.log("for of : Valores");
for(let numero of miArreglo){
    console.log(numero);
}

//for in : Indices
console.log("for in : Indices");
for(let indice in miArreglo){
    console.log(indice);
}

//También se puede usar el for in par aiterar llaves de un objeto
const objetoPrueba = {'a':1, 'b':2, 'c':3};
console.log("for in : Indices de un objeto");
for(let llave in objetoPrueba){
    console.log(llave);
}

//metodos de arreglos
//push -> agrega un elemento al final del arreglo
miArreglo.push(6);
console.log(miArreglo);

//pop -> elimina el ultimo elemento del arreglo
miArreglo.pop();
console.log(miArreglo);

//shift -> elimina el primer elemento del arreglo
miArreglo.shift();
console.log(miArreglo);

//unshift -> agrega un elemento al inicio del arreglo
miArreglo.unshift(1);
console.log(miArreglo);

//splice -> elimina un elemento del arreglo 
//(indice, cantidad de elementos a eliminar, ... items a agregar)
miArreglo.splice(1,1);
console.log(miArreglo);