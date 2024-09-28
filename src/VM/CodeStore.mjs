//compoenente C: almacena las instruciones:

class CodeStore {
    constructor() {
        this.instructions = [];  // Instrucciones almacenadas
    }

    loadProgram(instructions) {
        this.instructions = instructions;
    }

    getInstruction(pc) {
        return this.instructions[pc];  // Retorna la instrucción en la posición pc
    }
}
