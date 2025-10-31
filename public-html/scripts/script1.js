// 3. Crea una función doblarNumeros que reciba un arreglo de números y devuelva uno nuevo con cada número duplicado

console.log("Ejercicio 1 (3.)")
document.write(`<h3>Ejercicio 1</h3>`);

// Declaración de variables
const numeros = [];
let continuar = "", i = 0;

// Ciclo do-while para verificar la entrada de datos
do {
    do { // do while para verificar que se ingrese siempre un número
        numeros[i] = parseFloat(prompt("Ingrese un número:"));
        if (isNaN(numeros[i])) {
            alert("DATO NO VÁLIDA.\nINGRESE DE NUEVO.");
        }
    } while (isNaN(numeros[i]));
    
    do { // do while para verficar que la opcion continuar sea correcta
        continuar = prompt("¿Desea ingresar más números? S/N");
        continuar = continuar.toUpperCase();
        if (continuar != "S" && continuar != "N") {
            alert("OPCIÓN NO VÁLIDA.\nINGRESE DE NUEVO.");
        }
    } while (continuar != "S" && continuar != "N");
    i++;
} while (continuar != "N");

// Funcion doblarNumeros
function doblarNumeros(arregloNum) {
    const nuevoArreglo = [];
    for (let i = 0; i < arregloNum.length; i++) {
        nuevoArreglo[i] = arregloNum[i] * 2;
    }
    return nuevoArreglo;
}

const numerosDup = doblarNumeros(numeros);

// Salida de datos
console.log("Areglo inicial: " + numeros + "\nArreglo duplicado: " + numerosDup);
document.write(`<p>Arreglo inicial: ${numeros}<br>Arreglo duplicado: ${numerosDup}</p>`);