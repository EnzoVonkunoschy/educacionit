"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_js_1 = require("./util.js");
console.log((0, util_js_1.promedio)(8, 10));
console.log((0, util_js_1.raizCuadrada)(49));
function compuesta(a, b) {
    if (typeof a === 'function') {
        return a(b);
    }
    else {
        return "El argumento no es una función";
    }
}
console.log("Con función compuesta:");
console.log(compuesta(util_js_1.cuadrado, 3));
//console.log(compuesta(3,cuadrado))
