//Maneja la interacción con la consola y los argumentos pasados por el usuario.

const yargs = require('yargs');

class CommandLineInterface {
    constructor() {
        this.options = yargs
            .option('o', { alias: 'outfile', type: 'string', description: 'Archivo de salida' })
            .option('e', { alias: 'errfile', type: 'string', description: 'Archivo de errores' })
            .option('trace', { type: 'number', description: 'Nivel de trazabilidad', default: 0 })
            .argv;
    }

    getOptions() {
        return this.options;  // Retorna las opciones de la línea de comandos
    }
}
