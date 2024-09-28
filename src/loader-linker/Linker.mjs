//El Linker resuelve referencias a funciones y etiquetas antes de que el programa sea ejecutado.

class Linker {
    constructor() {
        this.symbolTable = {};  // Tabla de símbolos para las etiquetas y funciones
    }

    resolveReferences(vm) {
        vm.C.instructions.forEach((instruction, index) => {
            if (instruction.isLabel()) {
                this.symbolTable[instruction.label] = index;  // Almacena la referencia de la etiqueta
            }
        });
    }
}
