// 07-promesas.js

const fs = require('fs');

function promesaEsPar(numero) {
    return new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(`${numero} es par`)
            }
            reject(`${numero} No es par`)
        });
}


promesaEsPar(4)
    .then((valor) => {
        console.log(valor)
        return promesaEsPar(5)
    })
    .then((valor) => {
        console.log(valor)
    })
    .catch((valor) => console.log(valor))


function sleepSincrono(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Han pasado ${tiempo} segundos`)
        }, tiempo * 1000)
    })
}


// console.log("Hola inicio")
// sleepSincrono(3)
//     .then((valor) => console.log(valor))
//     .then(() => console.log("Hola fin"))

// async function principal(){
//     console.log("Hola inicio")
//     const valor = await sleepSincrono(3)
//     console.log(valor)
//     console.log("Hola fin")
// }
//
// principal()


/**
 Una función que acepte como parámetro una variable
 del "path" del archivo y otra variables con el "contenidoArchivo".
 Utilizar el modulo 'fs' para leer el archibo en ese "path" y añadir el
 "contenidoArchivo" a ese archivo
 **/
function leerArchivo(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path,
            'utf-8',
            (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                if (errorLecturaPrimerArchivo) {
                    reject("Hubo un error al leer el archivo")
                } else {
                    //console.log("Datos: ", contenidoPrimerArchivo)
                    resolve(contenidoPrimerArchivo)
                }
            }
        )
    })

}


function escribirArchivo(path, contenidoArchivo) {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            path,
            contenidoArchivo,
            (errorEscritura) =>{
                if (errorEscritura){
                    reject("Hubo un error al escribir el archivo")
                }
                resolve("Archivo escrito")
            }

        )
    })
}


leerArchivo('./06-ejemplo.txt')
    .then((contenido) => {
        console.log("Lectura del archivo")
        console.log(contenido)
        return escribirArchivo('./07-ejemplo.txt', contenido + " Se agrega al archivo 7")
    })
    .then((respuestaEscritura) => {
        console.log(respuestaEscritura)
    })
    .catch((error) => {
        console.log(error)
    })
