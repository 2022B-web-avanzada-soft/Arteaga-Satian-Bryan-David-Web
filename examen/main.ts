const inquirer = require('inquirer');

async function main() {
    const respuesta = await inquirer.prompt([
        {
            type: 'input',
            name: 'nombre',
            message: '¿Cuál es tu nombre?',
        },
        {
            type: 'input',
            name: 'apellido',
            message: '¿Cuál es tu apellido?',
        },
        {
            type: 'input',
            name: 'edad',
            message: '¿Cuál es tu edad?',
        }
    ]);
    console.log('respuesta', respuesta);
}

main().then(r =>  null);