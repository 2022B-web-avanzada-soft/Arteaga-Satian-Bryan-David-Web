// Stringgify y Parse

const arregloUsuario = [
    {
        id: 1,
        nombre: "David"
    }
]

const arregloGuardado = JSON.stringify(arregloUsuario);
console.log(arregloGuardado);

const arregloParseado = JSON.parse(arregloGuardado);
console.log(arregloParseado);