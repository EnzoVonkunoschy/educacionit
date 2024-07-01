"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raizCuadrada = exports.cuadrado = void 0;
exports.promedio = promedio;
function promedio(a, b) {
    return (a + b) / 2;
}
const cuadrado = (a) => a ** 2;
exports.cuadrado = cuadrado;
const raizCuadrada = (a) => a ** (1 / 2);
exports.raizCuadrada = raizCuadrada;
