const arreglo = [
    {
        id: 1,
        nombre: "Adrian",
        nota: 5,
    },
    {
        id: 2,
        nombre: "Vicente",
        nota: 8,
    },
    {
        id: 3,
        nombre: "Carolina",
        nota: 14,
    },
    {
        id: 4,
        nombre: "Wendy",
        nota: 16,
    },
    {
        id: 5,
        nombre: "Andrea",
        nota: 19,
    },
    {
        id: 6,
        nombre: "Pamela",
        nota: 19,
    },
    {
        id: 7,
        nombre: "Cristian",
        nota: 20,
    },
    {
        id: 8,
        nombre: "Daniel",
        nota: 19,
    },
    {
        id: 9,
        nombre: "Lilly",
        nota: 14,
    },
    {
        id: 10,
        nombre: "Ramiro",
        nota: 12,
    },
];

//FIND
//Devuelve el primer elemento que cumpla con la condición dada.
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Cristian';
        }
    );
console.log('respuestaFind', respuestaFind);


//Buscar la primera persona con nota menor a 14
let primeraPersonaConNotaMenorA14 = arreglo.find(persona => persona.nota < 14);
console.log('primeraPersonaConNotaMenorA14', primeraPersonaConNotaMenorA14);


//FINDINDEX
//Devuelve el indice del primer elemento que cumpla con la condición dada.
//Si no encuentra nada devuelve -1
const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === 'Cristian';
        }
    );
console.log('respuestaFindIndex', respuestaFindIndex); // 6


//FOREACH
//itera sobre el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
        }
    );


//MAP
//Creamos un nuevo arreglo agregando un campo si pasa o no. Se pasa si la nota es mayor a 14
const nuevoArray = arreglo.map(persona => {
    const nuevoElemento = {
        ...persona,
        aprueba: persona.nota>14
    }
    return nuevoElemento
})
console.log(nuevoArray)

nuevoArray[0].nombre = "Persona clon"
console.log(nuevoArray)
console.log(arreglo)

//FILTER
const respuestaFilter = arreglo.filter(persona => persona.nota>14)
console.log("Respuesta filter")
console.log(respuestaFilter)


//SOME
const hayAlgunaNotaMenorA9 = arreglo.some(persona => persona.nota<9)
console.log("Respuesta some: ", hayAlgunaNotaMenorA9) //True

//AND
const todasLasNotasSonMenorA9 = arreglo.every(persona => persona.nota<9)
console.log("Respuesta every: ", todasLasNotasSonMenorA9) //False


//REDUCE
//Vamos a sumar los valores
const sumaNotas = arreglo.reduce(
    (acumulador, actual) => actual.nota+acumulador,
    0
)
console.log("Suma notas: ", sumaNotas) //146
console.log("Promedio de notas", sumaNotas/arreglo.length) //14.6


//Todos los que tienen la nota menor a 14 les voy a sumar un punto.

console.log("Array original")
console.log(arreglo)
personasAyudadas = arreglo.filter(persona => persona.nota<14)
        .map(persona => {
            return {
                ...persona,
                nota: persona.nota+1
            }
        })

console.log("Array filtrado")
console.log(personasAyudadas)

