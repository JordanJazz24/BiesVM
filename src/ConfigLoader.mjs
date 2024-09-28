//Carga configuraciones desde un archivo JSON o desde la línea de comandos.

const fs = require('fs');

class ConfigLoader {
    static loadConfig(file) {
        const configFile = fs.readFileSync(file, 'utf8');
        return JSON.parse(configFile);  // Carga el archivo de configuración JSON
    }
}
