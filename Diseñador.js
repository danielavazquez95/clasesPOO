import { Empleado } from "./Empleado";

export class Diseñador extends Empleado {// La clase Diseñador hereda los métodos y propiedades de Empleado (herencia de prototipos).

    constructor(nombre, apellido, edad, id, tipo){
        super(nombre, apellido, edad, id );// El método super() va llamar al constructor de la clase Empleado.
        this.tipo = tipo;// Se crea una nueva propiedad para la clase Diseñador.
    }
};


