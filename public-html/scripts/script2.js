// 4. Crea una función filtrarYTransformar(arr) que reciba un arreglo de números y: 
// •	Elimine los valores negativos 
// •	Eleve los restantes al cuadrado 
// •	Devuelva la suma total de esos cuadrados. 
// filtrarYTransformar([2, -3, 4, -1, 5]); // 2² + 4² + 5² = 45

console.log("Ejercicio 2 (4.)")
document.write(`<h3>Ejercicio 2</h3>`);

// Declaración de variables
const numeros = [];
let continuar = "", i = 0;

do { // do while para verificar que se ingrese siempre un número, ahora se combina con la opción de salir
    numeros[i] = prompt((i + 1) + "° número\n" + "Ingrese un número o escriba 'q' para salir:");
    if (numeros[i] === "q") {
        numeros.pop();
        break;
    } else {

    }
    let numero = parseFloat(numeros[i]);

    if (isNaN(numero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    } else {
        numeros[i] = numero;
        i++;
    }
} while (true);
    
// Función filtrarYTransformar
function filtrarYTransformar(arr) {
    const nuevoArreglo = [...arr]; // Se crea un nuevo arreglo
    for (let i = 0; i < nuevoArreglo.length; i++) {
        if (nuevoArreglo[i] < 0) {
            nuevoArreglo.splice(i, 1); // Se borran los negativos
            i--;
        } else {
            nuevoArreglo[i] = nuevoArreglo[i] ** 2; // Se elevan al cuadrado
        }
    }

    // Se suman
    let suma = 0;
    for (let j = 0; j < nuevoArreglo.length; j++) {
        suma += nuevoArreglo[j];
    }

    return nuevoArreglo;
}

// Salida de datos
const arregloTransformado = filtrarYTransformar(numeros);

console.log("Arreglo inicial: " + numeros + "\nNuevo arreglo: " + arregloTransformado);
document.write(`<p>Arreglo inicial: ${numeros}<br>Arreglo filtrado y transformado: ${arregloTransformado} </p>`)