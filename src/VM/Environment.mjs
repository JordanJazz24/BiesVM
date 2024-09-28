//Componente B: BINDINS

class Environment {
    constructor() {
        this.frames = [];  // Lista de frames (entornos)
    }

    createFrame() {
        this.frames.push({});
    }

    deleteFrame() {
        this.frames.pop();
    }

    setValue(level, key, value) {
        if (!this.frames[level]) throw new Error("Invalid environment level");
        this.frames[level][key] = value;
    }

    getValue(level, key) {
        if (!this.frames[level]) throw new Error("Invalid environment level");
        return this.frames[level][key];
    }
}
