import { Empleado } from "./Empleado";

export class Programador extends Empleado { // La clase Programador hereda los métodos y propiedades de Empleado (herencia de prototipos).

    constructor(nombre, apellido, edad, id, lenguaje){
        super(nombre, apellido, edad, id); // El método super() va llamar al constructor de la clase Empleado.
        this.lenguaje = lenguaje; // Se crea una nueva propiedad para la clase Programador.
    }
};