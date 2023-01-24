import {IDirector, IPelicula} from "../Model/interfaces/Entidades";

const fs = require('fs');


function gestionarFormatoContenidoArchivo(contenidoArchivo: string, nuevoJson: string): string {
    // Si el archivo está vacío se agrega un [] al archivo
    if (contenidoArchivo === "" || contenidoArchivo === "[]") {
        return `[${nuevoJson}]`;
    }
    // Se agrega el JSON al final antes del ]
    return contenidoArchivo.replace("]", `,${nuevoJson}]`);
}

function leerArchivo(path: string): Promise<string> {
    //Primero se confirma que el archivo existe
    return new Promise((resolve, reject) => {
        fs.readFile(
            path,
            'utf-8',
            (errorReadFile: any, fileContent: string) => {
                if (errorReadFile) {
                    reject("Hubo un error leyendo el archivo")
                } else {
                    resolve(fileContent)
                }
            }
        )
    })

}

function escribirArchivo(path: string, fileContent: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            path,
            fileContent,
            (writeError: any) => {
                if (writeError) {
                    reject("Hubo un error escribiendo el archivo" + writeError);
                }
                resolve("Archivo escrito");
            }
        )
    })
}

async function guardarJSON(path: string, miJson: IDirector | IPelicula): Promise<void> {
    const miJsonString = JSON.stringify(miJson);
    let contenidoArchivo = await leerArchivo(path);
    contenidoArchivo = gestionarFormatoContenidoArchivo(contenidoArchivo, miJsonString);
    await escribirArchivo(path, contenidoArchivo);
}

async function guardarArrayJSON(path: string, miJson: IDirector[] | IPelicula[]): Promise<void> {
    const contenidoArchivo = JSON.stringify(miJson);
    await escribirArchivo(path, contenidoArchivo);
}

async function leerArrayJSON(path: string): Promise<IDirector[] | IPelicula[]> {
    const contenidoArchivo = await leerArchivo(path);
    const aux = contenidoArchivo === "" ? "[]" : contenidoArchivo;
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(aux));
        } catch (e) {
            reject(e);
        }
    });
}

async function crearArchivos(path1: string, path2: string): Promise<void> {
    const contenidoArchivo = "";
    await escribirArchivo(path1, contenidoArchivo);
    await escribirArchivo(path2, contenidoArchivo);
}

export {guardarJSON, guardarArrayJSON, leerArrayJSON, crearArchivos};