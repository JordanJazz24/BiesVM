//El Loader carga el archivo .basm, lo pasa al parser y luego lo inserta en la VM.

const fs = require('fs');

class Loader {
    constructor(parser, visitor) {
        this.parser = parser;  // Parser generado por ANTLR
        this.visitor = visitor;  // CustomVisitor
    }

    loadProgram(filename) {
        const input = fs.readFileSync(filename, 'utf8');  // Lee el archivo .basm
        const ast = this.parser.parse(input);  // Genera el AST usando el parser
        this.visitor.visit(ast);  // Usa el visitor para cargar las instrucciones en la VM
    }
}
