import {promedio, cuadrado, raizCuadrada} from './util.js'

console.log(promedio(8,10))

console.log(raizCuadrada(49))

function compuesta(a: (b: number)=> number,b: number): string|number{
    if(typeof a === 'function'){
        return a(b)
    }else{
        return "El argumento no es una función"
    }
}

console.log("Con función compuesta:")
console.log(compuesta(cuadrado,3))
//console.log(compuesta(3,cuadrado))