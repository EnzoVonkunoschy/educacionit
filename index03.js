"use strict";
const persona = {
    nombre: "Enzo",
    edad: 56,
    afiliado: true
};
//console.log(persona);
const personas = [];
personas.push(persona);
const persona2 = {
    nombre: "Carlos",
    edad: 25,
    afiliado: false
};
personas.push(persona2);
const persona3 = {
    nombre: "Carla",
    edad: 35,
    afiliado: true
};
personas.push(persona3);
console.log(personas);
for (let i = 0; i < personas.length; i++) {
    let str = personas[i].afiliado ? "Si" : "No";
    console.log(personas[i].nombre + " " + personas[i].edad + " Afiliado: " + str);
}
console.log("con forEach---------------");
personas.forEach((x) => {
    console.log(x.nombre + " " + x.edad + " Afiliado: " + (x.afiliado ? "Si" : "No"));
});
console.log("Con for of --------------------");
for (let p of personas) {
    console.log(p.nombre + " " + p.edad + " " + (p.afiliado ? "Si" : "No"));
}
// otra forma de instanciar un objeto único
const otraPer = {
    nombre: "Esteban",
    edad: 45,
    afiliado: false
};
