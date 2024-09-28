grammar BiesASM;

// Reglas del parser

program
    : (function | instruction)+ EOF  // Un programa es una secuencia de funciones o instrucciones
    ;

// Reglas para funciones
function
    : '$FUN' LABEL (parameterList)? ';'? NEWLINE instruction+ '$END' LABEL NEWLINE  // Las funciones se definen con $FUN y terminan con $END
    ;

// Reglas para instrucciones
instruction
    : labeledInstruction  // Instrucción con etiqueta opcional
    | mnemonicInstruction // Instrucción sin etiqueta
    ;

labeledInstruction
    : LABEL mnemonicInstruction  // Una instrucción que puede estar precedida por una etiqueta
    ;

// Reglas de instrucciones con y sin parámetros
mnemonicInstruction
    : mnemonicNoParams                  // Instrucciones que no requieren parámetros
    | mnemonicWithOneParam parameter    // Instrucciones que requieren un parámetro
    | mnemonicWithTwoParams parameter parameter  // Instrucciones que requieren dos parámetros
    ;

// Instrucciones que no aceptan parámetros
mnemonicNoParams
    : ADD   // Suma
    | SUB   // Resta
    | MUL   // Multiplicación
    | DIV   // División
    | APP   // Aplicar una función
    | RET   // Retornar de una función
    | HLT   // Halt, detener la ejecución
    | PRN   // Imprimir el tope de la pila
    | POP   // Sacar el valor en el tope de la pila
    | SWP   // Intercambiar los dos valores en el tope de la pila
    ;

// Instrucciones que aceptan un parámetro
mnemonicWithOneParam
    : LDV  // Cargar un valor en la pila
    | LDF  // Cargar una función en la pila (requiere una etiqueta)
    ;

// Instrucciones que aceptan dos parámetros
mnemonicWithTwoParams
    : BST  // Almacenar en el ambiente (requiere dos números)
    | BLD  // Cargar desde el ambiente (requiere dos números)
    | BR   // Saltar a una etiqueta específica
    | BT   // Saltar a la etiqueta si el valor en la pila es verdadero
    | BF   // Saltar a la etiqueta si el valor en la pila es falso
    ;

// Reglas para la lista de parámetros
parameterList
    : parameter (',' parameter)*  // Lista de parámetros separados por coma
    ;

// Parámetros permitidos en las instrucciones
parameter
    : NUMBER   // Números para operaciones en la pila y el ambiente
    | LABEL    // Etiquetas para saltos y referencias de funciones
    ;

// Reglas del lexer

// Tokens para los mnemónicos (instrucciones)
ADD   : 'ADD';    // Suma los dos valores en la pila
SUB   : 'SUB';    // Resta los dos valores en la pila
MUL   : 'MUL';    // Multiplica los dos valores en la pila
DIV   : 'DIV';    // Divide los dos valores en la pila
LDV   : 'LDV';    // Cargar un valor en la pila
BST   : 'BST';    // Almacenar en el ambiente (store)
BLD   : 'BLD';    // Cargar desde el ambiente (load)
LDF   : 'LDF';    // Cargar una función
APP   : 'APP';    // Aplicar una función
RET   : 'RET';    // Retornar de una función
HLT   : 'HLT';    // Detener la ejecución
PRN   : 'PRN';    // Imprimir el valor en el tope de la pila
BR    : 'BR';     // Saltar incondicionalmente
BT    : 'BT';     // Saltar si verdadero
BF    : 'BF';     // Saltar si falso
POP   : 'POP';    // Sacar el valor en el tope de la pila
SWP   : 'SWP';    // Intercambiar los dos valores en el tope de la pila

// Tokens para etiquetas y parámetros
LABEL : '$' [a-zA-Z_][a-zA-Z_0-9]* ; // Etiquetas y nombres de funciones
NUMBER: [0-9]+ ;                      // Números enteros

// Definición de salto de línea
NEWLINE: [\r\n]+ ;

// Definición de comentarios
COMMENT: ';' .*? '\n' -> channel(HIDDEN);  // Comentarios de una línea (skip)
WS     : [ \t\n\r]+ -> skip;              // Espacios en blanco y saltos de línea ignorados
