import {crearArchivos} from "./Business/OperacionesArchivo";
import {DirectorDAO} from "./Model/DirectorDAO";
import {IDirector, IPelicula} from "./Model/interfaces/Entidades";
import {PeliculaDAO} from "./Model/PeliculaDAO";

const inquirer = require('inquirer');

const RUTA_PELICULA = './src/Data/peliculas.txt';
let peliManager = new PeliculaDAO(RUTA_PELICULA);

const RUTA_DIRECTOR = './src/Data/directores.txt';
let dirManager = new DirectorDAO(RUTA_DIRECTOR);

//
async function moduloDirectores() {
    const inputDirector = async (esNuevo: boolean = false): Promise<IDirector> => {
        const nuevoDirector = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombres',
                message: 'Ingrese los nombres'
            },
            {
                type: 'list',
                name: 'genero',
                message: 'Ingrese el género',
                choices: [
                    'Masculino',
                    'Femenino',
                    'Otro'
                ]
            },
            {
                type: 'number',
                name: 'edad',
                message: 'Ingrese la edad'
            },
            {
                type: 'list',
                name: 'retirado',
                message: '¿Está retirado?',
                choices: [
                    'Sí',
                    'No'
                ]
            },
            {
                type: 'input',
                name: 'nacionalidad',
                message: 'Ingrese la nacionalidad'
            }
        ]);
        const nuevoId = await dirManager.obtenerNuevoId();

        return {
            id: nuevoId,
            nombres: nuevoDirector.nombres,
            genero: nuevoDirector.genero,
            edad: nuevoDirector.edad,
            retirado: nuevoDirector.retirado === 'Sí',
            nacionalidad: nuevoDirector.nacionalidad,
        };
    }
    const inputNombresDirector = async (): Promise<string> => {
        const nombresDirector = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombres',
                message: 'Ingrese los nombres del director'
            }
        ]);
        return nombresDirector.nombres;
    }
    const nombreSeleccionadoDirector = async (nombresDirectores): Promise<string> => {
        const nombresDirector = await inquirer.prompt([
            {
                type: 'list',
                name: 'nombres',
                message: 'Seleccione el director',
                choices: nombresDirectores
            }
        ]);
        return nombresDirector.nombres;
    }

    console.log('\n\t\tMódulo de directores');
    let operacion;
    do {
        console.log("\n");
        operacion = await inquirer.prompt([
            {
                type: 'list',
                name: 'operacion',
                message: '¿Qué operación desea realizar?',
                choices: [
                    'Añadir director',
                    'Buscar todos los directores',
                    'Buscar director por nombres',
                    'Actualizar edad del director',
                    'Eliminar director',
                    'Regresar'
                ],
            }
        ]);

        switch (operacion.operacion) {
            case 'Añadir director':
                const nuevoDirector = await inputDirector();
                const directorCreado = await dirManager.crear(nuevoDirector);
                console.log('Director creado con éxito');
                console.log(directorCreado);

                break;
            case 'Buscar todos los directores':
                const directores = await dirManager.buscarTodos();
                console.log(directores);
                break;
            case 'Buscar director por nombres':
                const nombres = await inputNombresDirector();
                const director = await dirManager.buscarPorNombre(nombres);
                //Si es undefined, no lo encontró
                if (director) {
                    console.log(director);
                } else {
                    console.log('No se encontró un director con esos nombres');
                }
                break;
            case 'Actualizar edad del director':
                // Obtengo una lista con los nombres de los directores
                const listaDirectores = await dirManager.buscarTodos();
                const listaNOmbres = listaDirectores.map((director) => director.nombres);
                if (listaNOmbres.length === 0) {
                    console.log('No hay directores registrados');
                    break;
                }
                // Pregunto al usuario por el nombre del director a actualizar
                const nombreEscogido = await nombreSeleccionadoDirector(listaNOmbres);

                // Obtengo el director con ese nombre
                const directorAActualizar = listaDirectores.find((director) => director.nombres === nombreEscogido);

                console.log('Director seleccionado: ', directorAActualizar);
                // Pregunto al usuario por la nueva edad
                const nuevaEdad = await inquirer.prompt([
                    {
                        type: 'number',
                        name: 'edad',
                        message: 'Ingrese la nueva edad'

                    }
                ]);
                // Actualizo la edad del director
                directorAActualizar.edad = nuevaEdad.edad;

                const miDirectorActualizado = await dirManager.actualizar(directorAActualizar);
                console.log('Director actualizado');
                console.log(miDirectorActualizado);
                break;
            case 'Eliminar director':
                // Obtengo una lista con los nombres de los directores
                const listaDirectores2 = await dirManager.buscarTodos();
                const listaNOmbres2 = listaDirectores2.map((director) => director.nombres);
                if (listaNOmbres2.length === 0) {
                    console.log('No hay directores registrados');
                    break;
                }
                // Pregunto al usuario por el nombre del director a actualizar
                const nombreEscogido2 = await nombreSeleccionadoDirector(listaNOmbres2);

                // Obtengo el director con ese nombre
                const directorAEliminar = listaDirectores2.find((director) => director.nombres === nombreEscogido2);
                const miDirectorEliminado = await dirManager.eliminar(directorAEliminar.id);
                console.log('Director eliminado');
                break;
            case 'Regresar':
                return
        }

    } while (operacion.operacion !== 'Regresar');


}


async function moduloPeliculas() {

    const inputPelicula = async (listaDirectores: IDirector[]): Promise<IPelicula> => {
        const nuevaPelicula = await inquirer.prompt([
            {
                type: 'input',
                name: 'titulo',
                message: 'Ingrese el título de la película'
            },
            {
                type: 'number',
                name: 'anio',
                message: 'Ingrese el año de lanzamiento'
            },
            {
                type: 'list',
                name: 'genero',
                message: 'Ingrese el género de la película',
                choices: [
                    'Acción',
                    'Comedia',
                    'Drama',
                    'Terror',
                    'Otro'
                ]
            },
            {
                type: 'list',
                name: 'rentable',
                message: '¿Fue rentable?',
                choices: [
                    'Sí',
                    'No'
                ]
            },
            {
                type: 'list',
                name: 'director',
                message: 'Ingrese el director de la película',
                choices: [...listaDirectores.map((dir) => dir.nombres), 'Otro']
            }
        ]);

        const nuevoId = await peliManager.obtenerNuevoId();
        //Obtenemos el director

        if (nuevaPelicula.director === 'Otro') {
            const dirOtro: IDirector = {
                nombres: 'Otro',
                genero: 'Desconocido',
                edad: 0,
                retirado: false,
                nacionalidad: 'Desconocida',
            }
            nuevaPelicula.director = dirOtro;
        } else {
            nuevaPelicula.director = listaDirectores.find((dir) => dir.nombres === nuevaPelicula.director);
        }
        return {
            id: nuevoId,
            titulo: nuevaPelicula.titulo,
            anioLanzamiento: nuevaPelicula.anio,
            genero: nuevaPelicula.genero,
            rentable: nuevaPelicula.rentable === 'Sí',
            director: nuevaPelicula.director,
        };
    }
    const inputNombrePelicula = async (): Promise<string> => {
        const nombrePelicula = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre de la película'
            }
        ]);
        return nombrePelicula.nombre;
    }
    const nombreSeleccionadoPelicula = async (nombresPeliculas): Promise<string> => {
        const nombresPelicula = await inquirer.prompt([
            {
                type: 'list',
                name: 'nombre',
                message: 'Seleccione la película',
                choices: nombresPeliculas
            }
        ]);
        return nombresPelicula.nombre;
    }

    const inputAnioPelicula = async (): Promise<number> => {
        const anioPelicula = await inquirer.prompt([
            {
                type: 'number',
                name: 'anio',
                message: 'Ingrese el nuevo año de lanzamiento'
            }
        ]);
        return anioPelicula.anio;
    }

    let operacion;
    do {
        operacion = await inquirer.prompt([
            {
                type: 'list',
                name: 'operacion',
                message: '¿Qué desea hacer?',
                choices: [
                    'Crear película',
                    'Buscar todas las películas',
                    'Buscar película por nombre',
                    'Actualizar año de la película',
                    'Eliminar película',
                    'Regresar'
                ]
            }
        ]);
        switch (operacion.operacion) {
            case 'Crear película':
                // Obtengo una lista con los nombres de los directores
                const listaDirectores = await dirManager.buscarTodos();

                let nuevaPelicula = await inputPelicula(listaDirectores);
                nuevaPelicula = await peliManager.crear(nuevaPelicula);
                console.log('Película creada con éxito');
                console.log(nuevaPelicula);
                break;
            case 'Buscar todas las películas':
                const listaPeliculas = await peliManager.buscarTodos();
                if (listaPeliculas.length === 0) {
                    console.log('No hay películas registradas');
                    break;
                }
                console.log('Lista de películas');
                console.log(listaPeliculas);
                break;
            case 'Buscar película por nombre':
                const nombrePelicula = await inputNombrePelicula();
                const pelicula = await peliManager.buscarPorNombre(nombrePelicula);
                if (pelicula) {
                    console.log(pelicula);
                } else {
                    console.log('No se encontró la película');
                }
                break;
            case 'Actualizar año de la película':
                // Obtengo una lista con los nombres de las películas
                const listaPeliculas2 = await peliManager.buscarTodos();
                if (listaPeliculas2.length === 0) {
                    console.log('No hay películas registradas');
                    break;
                }
                const listaNombres = listaPeliculas2.map((peli) => peli.titulo);
                // Obtengo el nombre de la película seleccionada
                const nombreSeleccionado = await nombreSeleccionadoPelicula(listaNombres);
                // Obtengo la película seleccionada
                const peliculaSeleccionada = listaPeliculas2.find((peli) => peli.titulo === nombreSeleccionado);
                // Obtengo el nuevo año
                const nuevoAnio = await inputAnioPelicula();
                // Actualizo la película
                peliculaSeleccionada.anioLanzamiento = nuevoAnio;
                const miPeli = await peliManager.actualizar(peliculaSeleccionada);
                console.log('Película actualizada con éxito');
                console.log(miPeli);
                break;
            case 'Eliminar película':
                // Obtengo una lista con los nombres de las películas
                const listaPeliculas3 = await peliManager.buscarTodos();
                if (listaPeliculas3.length === 0) {
                    console.log('No hay películas registradas');
                    break;
                }
                const listaNombres3 = listaPeliculas3.map((peli) => peli.titulo);
                // Obtengo el nombre de la película seleccionada
                const nombreSeleccionado3 = await nombreSeleccionadoPelicula(listaNombres3);
                // Obtengo la película seleccionada
                const peliculaSeleccionada3 = listaPeliculas3.find((peli) => peli.titulo === nombreSeleccionado3);
                // Elimino la película
                await peliManager.eliminar(peliculaSeleccionada3.id);
                console.log('Película eliminada con éxito');
                break;
            case 'Regresar':
                return

        }
    } while (operacion.operacion !== 'Regresar');

}

async function main() {
    console.log('\tSistema de inventario para películas y directores');
    await crearArchivos(RUTA_PELICULA, RUTA_DIRECTOR);

    let moduloEscogido;
    do {
        moduloEscogido = await inquirer.prompt([
            {
                type: 'list',
                name: 'modulo',
                message: '¿Qué módulo desea utilizar?',
                choices: [
                    'Directores',
                    'Películas',
                    'Salir'
                ]
            }
        ]);
        switch (moduloEscogido.modulo) {
            case 'Directores':
                await moduloDirectores();
                break;
            case 'Películas':
                await moduloPeliculas();
                break;
            case 'Salir':
                console.log('Adiós');
                return
        }
    } while (moduloEscogido.modulo !== 'Salir');


}

main().then().catch((e) => console.log(e));