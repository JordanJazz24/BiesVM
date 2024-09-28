// clase principal digamos

class Runner {
    constructor(vm) {
        this.vm = vm;  // Instancia de la máquina virtual
    }

    start() {
        this.vm.run();  // Inicia la ejecución de la VM
    }
}
