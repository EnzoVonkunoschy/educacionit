function classLogger(target: Function)
    {
        console.log(`Clase decorada: ${target.name}`)
    }

function methodLogger(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor)
    {
        console.log(`Metodo llamado: ${propertyKey}(${descriptor.value.toString()})`)
    }

@classLogger
class Persona{
    nombre: string;
    apellido: string;
    constructor(nombre: string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    @methodLogger
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
    }
}

const personax = new Persona('Juan','Pérez')
personax.saludar()

const personay = new Persona('María','López')
personay.saludar()