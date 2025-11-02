// 7. Crea una función tieneDuplicados(arr) que use un Set para determinar si un arreglo contiene elementos repetidos. Debe devolver true si hay duplicados

console.log("Ejercicio 5 (7.)")
document.write(`<h3>Ejercicio 5</h3>`);

// Función tieneDuplicados
function tieneDuplicados(arr) {
    let nuevoSet = new Set();
    for (let i of arr) {
        nuevoSet.add(i);
    }
    return nuevoSet.size < arr.length ? true : false; // Si el tamaño del Set es menor que el del arreglo es porque quitó los repetidos del arreglo;
}

const arreglo = [1, 4, 2, 1, 4, 5, 9];

// Salida de datos
console.log("Arreglo original: " + arreglo + "\nResultado: " + tieneDuplicados(arreglo));
document.write(`<p>Arreglo original: ${arreglo}<br>Resultado: ${tieneDuplicados(arreglo) ? "Tiene repetidos" : "No tiene repetidos"}</p>`);