// para manejar varias instancias de la misma instrucciones 

class InstructionFactory {
    constructor() {
        this.instructionCache = {};  // Cache de instancias
    }

    getInstruction(type) {
        if (!this.instructionCache[type]) {
            // Crea una nueva instancia si no está en la cache
            this.instructionCache[type] = new Instruction(type);
        }
        return this.instructionCache[type];
    }
}
