"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classLogger(target) {
    console.log(`Clase decorada: ${target.name}`);
}
function methodLogger(target, propertyKey, descriptor) {
    console.log(`Metodo llamado: ${propertyKey}(${descriptor.value.toString()})`);
}
let Persona = class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
};
__decorate([
    methodLogger
], Persona.prototype, "saludar", null);
Persona = __decorate([
    classLogger
], Persona);
const personax = new Persona('Juan', 'Pérez');
personax.saludar();
const personay = new Persona('María', 'López');
personay.saludar();
