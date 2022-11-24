const fs = require('fs');

// 06-callbacks
// console.log("PRIMERO")
// fs.readFile(
//     './06-ejemplo.txt',
//     'utf-8',
//     (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
//         console.log("SEGUNDO")
//     }
// )
//
// console.log("TERCERO")


//Bien ahora para que sea síncrono usamos un callback
console.log("AHORA ES SÍNCRONO")
function primero(callback){
    console.log("PRIMERO");
    callback()
}

function segundo(callback){
    fs.readFile(
        './06-ejemplo.txt',
        'utf-8',
        (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
            console.log("SEGUNDO")
            callback()
        }
    )
}

function tercero(){
    console.log("TERCERO")
}

    // primero(() =>{
    //     segundo(() => {
    //         tercero()
    //     })
    // })


//1. Leer el archivo 06-ejemplo.txt
//Imprimir en consola.
//2. Después del paso 1, ller el archivo 01-variables,js
//Imprimir en consola
//3. Crar un nuevo archiv con los dos anteriores

function leerArchivo(nombre, callback){
    fs.readFile(
        nombre,
        'utf-8',
        (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
            if (errorLecturaPrimerArchivo){
                console.error("Error leyendo el archivo", errorLecturaPrimerArchivo)
            } else{
                console.log("Datos: ", contenidoPrimerArchivo)
                callback()
            }
        }
    )
}

function escribirArchivo(nombre, texto, callback){
    fs.writeFile(
        nombre,
        texto,
        (errorEscritura) =>{
            console.log("Hubo un error al escribir el archivo")
        }

    )
}

leerArchivo('./06-ejemplo.txt', () =>{
    leerArchivo('./01-variables.js', () =>{
        escribirArchivo('06-nuevo-archivo.txt', "Hola esto es nuevo")
    })
})

