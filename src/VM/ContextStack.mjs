//Componente D : contextos de frames

class ContextStack {
    constructor() {
        this.contexts = [];
    }

    pushContext(frame, pc) {
        this.contexts.push({ frame, pc });
    }

    popContext() {
        return this.contexts.pop();
    }

    getCurrentContext() {
        return this.contexts[this.contexts.length - 1];
    }
}

