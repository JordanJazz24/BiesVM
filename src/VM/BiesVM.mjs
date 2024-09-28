class BiesVM {
    constructor() {
        this.C = new CodeStore();      // Almacena el código del programa
        this.S = new Stack();          // Pila para operaciones
        this.B = new Environment();    // Entorno (bindings)
        this.D = new ContextStack();   // Pila de contextos de ejecución
        this.pc = 0;                   // Program counter (contador de programa)
    }

    // Ejecuta el ciclo de instrucciones del programa
    run() {
        while (true) {
            const instruction = this.C.getInstruction(this.pc);  // Obtiene la instrucción actual
            instruction.execute(this);  // Ejecuta la instrucción en el contexto de la VM
            if (instruction.isHalt()) break;  // Si la instrucción es HLT, se detiene
            this.pc++;  // Incrementa el program counter
        }
    }
}
