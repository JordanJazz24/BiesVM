
### Descripción de los Componentes:

#### 1. **`vm/` - Máquina Virtual**:
   - **BiesVM.js**: Esta es la **clase principal** de la máquina virtual que integra los componentes **C** (almacenamiento de código), **S** (pila), **B** (bindings), y **D** (contextos de ejecución). Debe manejar la ejecución de las instrucciones y cambiar el estado de la máquina.
   - **Stack.js**: Maneja las operaciones de la pila (**S**) como `push`, `pop`, y `swap`.
   - **Environment.js**: Se encarga de manejar los entornos o bindings (**B**), incluyendo los diferentes niveles de lexicografía de las funciones.
   - **ContextStack.js**: Clase que gestiona la pila especial para los contextos (**D**) y los program counters.
   - **CodeStore.js**: Almacena el código (instrucciones) que la VM ejecutará (**C**). Contiene el programa cargado en memoria.
   - **InstructionFactory.js**: Implementa el **Flyweight Pattern** para crear instrucciones de manera eficiente. Solo genera una instancia de cada instrucción, evitando múltiples instancias de instrucciones repetitivas como `ADD` o `POP`.

#### 2. **`runner/` - Ejecución y Consola**:
   - **Runner.js**: Ejecuta el ciclo de ejecución de la máquina virtual. Recorre las instrucciones a través del **program counter (PC)**, obteniendo las instrucciones desde **C**, ejecutándolas y actualizando **S**, **B** y **D**.
   - **CommandLineInterface.js**: Maneja la interacción con la consola y los **argumentos de línea de comandos**. Gestiona las opciones como `--o outfile`, `--e errfile`, y `--trace level`. Utiliza una librería como `yargs` para procesar los argumentos.

#### 3. **`parser/` - Parsing y Loader**:
   - **BiesAsmLexer.js, BiesAsmParser.js, BiesAsmVisitor.js**: Generados por **ANTLR4** a partir de la gramática `BiesAsm.g4`.
   - **CustomVisitor.js**: Visitor personalizado que interactúa con la **VM**. Recorre el árbol de sintaxis abstracto (AST) generado por el parser y ejecuta instrucciones invocando métodos en la máquina virtual.
   - **Loader.js**: Se encarga de **cargar** el programa en la máquina virtual, colocándolo en el componente **C** (almacenamiento de código). Trabaja en conjunto con el **Linker** para resolver etiquetas y referencias de funciones.

#### 4. **`linker/` - Enlazador**:
   - **Linker.js**: Resuelve referencias a funciones y etiquetas antes de ejecutar el programa. Se asegura de que las referencias dentro del código (como `$FUN`) estén correctamente indexadas y listas para la ejecución.

#### 5. **`config/` - Configuración**:
   - **ConfigLoader.js**: Lee archivos de configuración (como `.json`) o argumentos de línea de comandos. Los valores de configuración pueden ser usados para definir el comportamiento de la VM (como el nivel de trazabilidad `--trace`).

#### 6. **`test/` - Pruebas Unitarias**:
   - Pruebas unitarias para cada componente de la máquina virtual. Las pruebas se dividen en varias categorías, como **BiesVM**, **Runner**, y **Instrucciones**. Esto asegura que cada componente funcione de manera independiente.

#### 7. **Archivos de Entrada/Salida y Configuración**:
   - **input/**: Contiene los archivos de ejemplo `.basm` para probar la máquina virtual.
   - **output/**: Guarda las salidas generadas por la máquina durante la ejecución (sysout y syserr).
   - **config_biesm.json**: Archivo de configuración por defecto que puede ser cargado por la VM cuando se ejecuta con la opción `--use-config`.

---

### Ciclo de Ejecución del Proyecto:

1. **Carga del Programa**:
   - El **Loader** carga el código fuente desde el archivo `.basm` en el componente **C** de la máquina virtual.
   - El **Linker** resuelve todas las referencias a etiquetas y funciones, garantizando que estén disponibles en la tabla de funciones.

2. **Configuración del Entorno**:
   - El **CommandLineInterface** recibe las opciones de ejecución de la consola. Si se pasa un archivo de configuración, el **ConfigLoader** carga las opciones predeterminadas (como trazabilidad, archivo de errores, etc.).

3. **Ejecución del Programa**:
   - El **Runner** inicia el ciclo de ejecución. Se ejecutan las instrucciones una por una, invocando los métodos de la máquina virtual correspondientes a cada instrucción.
   - La pila (**S**), los bindings (**B**), y los contextos (**D**) se actualizan dinámicamente durante la ejecución.

4. **Trazabilidad y Salida**:
   - Dependiendo del nivel de trazabilidad (`--trace`), se puede registrar información sobre el estado actual de la VM (como la función en ejecución, el valor de la pila, etc.) en el archivo de errores (`syserr.txt`).
   - La salida estándar (`sysout.txt`) captura las salidas del comando `PRN`.

---

