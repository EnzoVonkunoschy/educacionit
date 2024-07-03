class Mercaderia{
    nombre: string;
    precio: number;
    impuesto: boolean;

    constructor(nom: string, prec: number, imp: boolean){
        this.nombre = nom;
        this.precio = prec;
        this.impuesto = imp;
    }
    setNombre(nom: string){
        this.nombre = nom;
    }
    getNombre(){
        return this.nombre;
    }
    setPrecio(pre: number){
        this.precio = pre
    }
    getPrecio(){
        return this.precio;
    }
    setImpuesto(imp: boolean){
        this.impuesto = imp;
    }
    getImpuesto(){
        return this.impuesto;
    }
}

const miMercaderia = new Mercaderia("café",1000,true);
console.log(miMercaderia);
miMercaderia.setNombre("Té");
miMercaderia.setPrecio(500);
miMercaderia.setImpuesto(false)
console.log(miMercaderia)
console.log(miMercaderia.getNombre())
console.log(miMercaderia.getPrecio())
console.log(miMercaderia.getImpuesto())