// 04 - funciones
function soloNumer(a,b,c){
    return a-b+c;
}

//JS permite el uso de funciones sin validaciones
//soloNumer('v', true, [1,2,3]);
//soloNumer((a) => a, );
//soloNumer()

//Sin return devolvemos undefined


//FUNCIONES NOMBRADAS
function funcionNombrada() {
    return
}

//FUNCIONES sin nombre
const miAnonima = function () {
    return "Hola";
}

//Funciones fat arrow
const funcionFAtArrow = () => {
    return "buenas";
}

//Podemos enviar sin el return si solo tenemos un parámetro
const f1 = (parametro) => parametro +1;


//Funciones con pa´rametros infinitos
function sumarNumeros(...numeros){
    let total = 0;
    numeros.forEach(
        (valorActual) => {
            total+=valorActual;
        }
    )
    console.log(total)
}

sumarNumeros(1,2,3,4,5,6,7,8,9);


//Desestructuración de objetos
//El orden sí importa

const adrian = {
    nombre: "Adrián"
}

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
}

const adrianCarolina = {
    ...adrian,
    ...carolina
}

//Como carolina está al final, se sobreescribirá con su nombre.
console.log("Adrian carolina: ", adrianCarolina)


//Desestrucutración de arreglos
const arreglo1 = [1,2,3,4,5]
const arreglo2 = [6,7,8,9]

const superArreglo = [...arreglo1, ...arreglo2]

console.log("Super arreglo: ", superArreglo)
