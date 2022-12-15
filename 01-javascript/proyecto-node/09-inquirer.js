// 09-inquirer.js

// npm init -> package.json -> dependencias -> scripts
// npm install inquirer -> npm i inquirer
// node_modules -> están las dependencias

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

main();