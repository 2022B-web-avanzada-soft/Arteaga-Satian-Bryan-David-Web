// ASync await
/**
 Una función que acepte como parámetro una variable
 del "path" del archivo y otra variables con el "contenidoArchivo".
 Utilizar el modulo 'fs' para leer el archibo en ese "path" y añadir el
 "contenidoArchivo" a ese archivo
 **/
const fs = require('fs');

//ASync await se usa dentro de una función, se puede usar en cualquier tipo de función
//Si sabemos que va a haber un resolve y reject, se puede usar try catch

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


async function leerYEscribirArchivo(pathLectura, pathEscritura, nuevoContenido) {
    try{
        const contenidoArchivo = await leerArchivo(pathLectura)
        console.log("Se muestra el contenido inicial del archivo")
        console.log(contenidoArchivo)
        await escribirArchivo(pathEscritura, contenidoArchivo + ", " + nuevoContenido)
        const contenidoArchivo2 = await leerArchivo("07-ejemplo-con-async.txt")
        console.log("Se muestra el contenido final del archivo")
        console.log(contenidoArchivo2)
    }catch (e) {
        console.log(e)
    }
}

// const f1 = async () =>{
//     console.log("Inicio")
//     await leerYEscribirArchivo("06-ejemplo.txt", "07-ejemplo-con-async.txt", "Se agrega este texto nuevo")
//     console.log("Fin")
// }
//
// f1()

leerYEscribirArchivo("06-ejemplo.txt", "07-ejemplo-con-async.txt", "Se agrega este texto nuevo").then().catch()
