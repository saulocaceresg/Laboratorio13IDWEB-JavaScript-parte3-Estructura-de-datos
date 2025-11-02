// 12.	Crea una función contarLetras(texto) que cuente cuántas veces aparece cada letra en una cadena (ignora mayúsculas/minúsculas).
// Devuelve un objeto con el formato { letra: cantidad }. 
// contarLetras("banana"); // { b:1, a:3, n:2 }

console.log("Ejercicio 10 (12.)");
document.write(`<h3>Ejercicio 10</h3>`);

let cadena = "Este es una cadena con números 1234434 y espacios ";

console.log("Cadena: " + cadena);
document.write(`<p><b>Cadena:</b> "${cadena}"</p>`);

// Funciónn para contar letras. Borra los espacios en blamco, convierte a minúsculas y cuenta las repeticiones
function contarLetras(texto) {
    let textoLimpio = texto.replace(/\s+/g, '');
    const letras = []; // Alamacena solo letras
    for (let i = 0; i < textoLimpio.length; i++) {
        const caracter = textoLimpio.charAt(i);
        if (isNaN(parseFloat(textoLimpio.charAt(i)))) {
            letras.push(caracter.toLowerCase());
        }
    }

    const cantidad = []; // Almacena la cantidad de repeticiones
    for (let i = 0; i < letras.length; i++) { // Cuenta y modifica el arreglo de letras
        let actual = letras[i];
        let contador = 1; // Inicia en uno porque la palabra actual se debe contar a sí misma
        for (let j = 0; j < letras.length; j++) {
            if (actual === letras[j] && j !== i) { // j != i para evitar que se vuelva a contar
                contador++;
                letras.splice(j, 1); // se borra el repetido y se reduce el índice para evitar complejidades
                j--;
            }
        }
        cantidad[i] = contador;
    }

    return contador = {
        letra: letras,
        cantidad: cantidad,
        mostrar() {
            console.log("Conteo de letras:");
            document.write(`<p>Conteo de letras:<br>`)
            for (let i = 0; i < this.letra.length; i++) {
                console.log(`${this.letra[i]}: ${this.cantidad[i]}`);
                document.write(`${this.letra[i]}: ${this.cantidad[i]}<br>`);
            }
            document.write(`</p>`);
        }
    }
}

const letrasContadas = { ...contarLetras(cadena) };

letrasContadas.mostrar();
