"use strict";
class Mercaderia {
    constructor(nom, prec, imp) {
        this.nombre = nom;
        this.precio = prec;
        this.impuesto = imp;
    }
    setNombre(nom) {
        this.nombre = nom;
    }
    getNombre() {
        return this.nombre;
    }
    setPrecio(pre) {
        this.precio = pre;
    }
    getPrecio() {
        return this.precio;
    }
    setImpuesto(imp) {
        this.impuesto = imp;
    }
    getImpuesto() {
        return this.impuesto;
    }
}
const miMercaderia = new Mercaderia("café", 1000, true);
console.log(miMercaderia);
miMercaderia.setNombre("Té");
miMercaderia.setPrecio(500);
miMercaderia.setImpuesto(false);
console.log(miMercaderia);
console.log(miMercaderia.getNombre());
console.log(miMercaderia.getPrecio());
console.log(miMercaderia.getImpuesto());
