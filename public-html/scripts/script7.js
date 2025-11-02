// 9.	Crea una función contarPalabras(texto) que use un Map para contar cuántas veces aparece cada palabra en una cadena (sin distinguir mayúsculas).
// contarPalabras("sol luna sol sol estrella luna"); 
// Map { "sol" => 3, "luna" => 2, "estrella" => 1 }

console.log("Ejercicio 7 (9.)");
document.write(`<h3>Ejercicio 7</h3>`);

let cadena = "sol luna sol Sol estrella luna sol Estrella luna";
console.log("Cadena: " + cadena);

function contarPalabras(texto) {
    const palabras = []; // Arreglo donde se almacenarán las palabras separadas
    let j = 0, i = 0;
    let palabra = "";
    while (i < texto.length) { // Ciclo while para mejor manejo de los índices
        const letra = texto.charAt(i);
        if (letra !== " ") {
            palabra += letra; // Se concatena con 'palabra' si el caracter no es un espacio en blanco
        } else {
            // console.log(palabra);
            palabras[j] = palabra.toLowerCase();
            j++; 
            palabra = "";
        }
        i++;
    }
    if (texto.length > 0) { // Para guardar la última palabra, pues no termina en espacio
        // console.log(palabra);
        palabras[j] = palabra.toLowerCase();
    }

    console.log("Arreglo: " + palabras);

    let mapaContar = new Map();
    // let setValores = new Set(...palabras);

    for (let i = 0; i < palabras.length; i++) {
        let actual = palabras[i];
        let contador = 1; // Inicia en uno porque la palabra actual se debe contar a sí misma
        for (let j = 0; j < palabras.length; j++) {
            if (actual === palabras[j] && j !== i) { // j != i para evitar que se vuelva a contar
                contador++;
                palabras.splice(j, 1); // se borra el repetido y se reduce el índice para evitar complejidades
                j--;
            }
        }
        mapaContar.set(actual, contador); // se agrega el valor y la cantidad de repeticiones al map
    }

    // Salida de datos
    document.write(`<p>Cadena original: [${texto}]<br>Conteo de palabras:<br>`);
    mapaContar.forEach((palabra, cont) => {
        document.write(`"${cont}" => ${palabra}<br>`);
    });
    console.log(mapaContar);
}

contarPalabras(cadena);