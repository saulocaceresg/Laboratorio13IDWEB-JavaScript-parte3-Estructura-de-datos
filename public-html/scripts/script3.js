// 5.	Crea una función reordenarPalabras(oracion) que:
// •	Reciba una cadena con palabras separadas por espacios
// •	Devuelva un arreglo ordenado alfabéticamente, pero con las palabras en mayúsculas 
// reordenarPalabras("sol luna estrella planeta"); //["ESTRELLA", "LUNA", "PLANETA", "SOL"] 

console.log("Ejercicio 3 (5.)")
document.write(`<h3>Ejercicio 3</h3>`);

let oracion = "sol luna estrella planeta"; // La oración

// Función que reordenará las palabras en orden alfabético
function reordenarPalabras(oracion) {
    const palabras = []; // Arreglo donde se almacenarán las palabras separadas
    let j = 0, i = 0;
    let palabra = "";
    while (i < oracion.length) { // Ciclo while para mejor manejo de los índices
        const letra = oracion.charAt(i);
        if (letra !== " ") {
            palabra += letra; // Se concatena con 'palabra' si el caracter no es un espacio en blanco
        } else {
            // console.log(palabra);
            palabras[j] = palabra.toUpperCase(); // Se agrega al arreglo la palabra en mayúscula
            j++; 
            palabra = "";
        }
        i++;
    }
    
    if (oracion.length > 0) { // Para guardar la última palabra, pues no termina en espacio
        console.log(palabra);
        palabras[j] = palabra.toUpperCase();
    }

    // Función para ordenar las palabras alfabéticamente (por selección)
    function ordenar(palabras) {
        for (let i = 0; i < palabras.length - 1; i++) {
            let iMenor = i;
            for (let j = i + 1; j < palabras.length; j++) {
                if (i === palabras.length - 1) {
                    break;
                } else if (palabras[j] < palabras[iMenor]) {
                    iMenor = j;
                }
            }
            if (iMenor !== i) {
                let aux = palabras[i];
                palabras[i] = palabras[iMenor];
                palabras[iMenor] = aux;
            }
        }
        return palabras;
    }
    const ordenAlf = [ordenar(palabras)];

    return ordenAlf;
}

// Salida de datos
console.log("Oración inicial: " + oracion + "Arreglo final: " + reordenarPalabras(oracion));
document.write(`<p>Oración inicial: ${oracion}<br> Arreglo final: ${reordenarPalabras(oracion)} </p>`);