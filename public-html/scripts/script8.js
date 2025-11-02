// 10.	Crea una función invertirMap(map) que reciba un Map y devuelva uno nuevo donde las claves sean los valores y los valores sean las claves.
// let capitales = new Map([ 
// ["Perú", "Lima"], 
// ["Chile", "Santiago"] 
// ]); 
// invertirMap(capitales); // Map { "Lima" => "Perú", "Santiago" => "Chile" } 

console.log("Ejercicio 8 (10.)");
document.write(`<h3>Ejercicio 8</h3>`);

// Declaración del Map
let capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"],
    ["México", "Ciudad de México"],
    ["Argentina", "Buenos Aires"]
]);

// Función para invertir el map
function invertirMap(map) {
    // Almacena los valores y claves en arreglos diferentes y los intercambia en un nuevo Map
    let valores = [...map.values()];
    let claves = [...map.keys()];
    let nuevoMapa = new Map();

    for (let i = 0; i < map.size; i++) {
        nuevoMapa.set(valores[i], claves[i]);
    }

    return nuevoMapa;
}

const invertido = new Map(invertirMap(capitales));

// Salida de datos
console.log("Map original: ", capitales, "\nMap invertido:", invertido);
document.write(`<p><b>Map original:</b><br>`);
capitales.forEach((valor, clave) => {
    document.write(`${clave} => ${valor}<br>`);
});
document.write(`</p><p><b>Map invertido:</b><br>`);
invertido.forEach((valor, clave) => {
    document.write(`${clave} => ${valor}<br>`);
});