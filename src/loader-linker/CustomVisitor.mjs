class CustomVisitor extends BiesASMVisitor {
    constructor(vm) {
        super();
        this.vm = vm;  // Referencia a la VM
    }

    visitInstruction(ctx) {
        const mnemonic = ctx.getChild(0).getText();
        const instruction = InstructionFactory.getInstruction(mnemonic);
        this.vm.C.loadProgram(instruction);  // Carga la instrucción en el CodeStore (C)
        return this.visitChildren(ctx);
    }
}
