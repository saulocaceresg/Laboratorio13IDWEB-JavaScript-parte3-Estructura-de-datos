// 8. Crea un Map con productos y precios, y calcula el precio total de una lista de compras

console.log("Ejercicio 6 (8.)")
document.write(`<h3>Ejercicio 6</h3>`);

// Map con datos
let productos = new Map([
    ["Cuaderno", 9],
    ["Talco", 15],
    ["Cargador", 20],
    ["Gaseosa", 5],
    ["Jabón", 6]
]);

// Función para calcular el precio total e imprime los productos y precios
function precioTotal(productos) {
    let suma = 0;
    let nomProductos = [...productos.keys()];
    console.log("Productos:");
    document.write(`<p>Productos:<br>`);
    // Ciclo for para imprimir los productos
    for (let i = 0; i < nomProductos.length; i++) {
        console.log("- " + nomProductos[i] + " => S/. " + productos.get(nomProductos[i]));
        document.write(`- ${nomProductos[i]} => S/. ${productos.get(nomProductos[i])}<br>`);
    }
    
    // ciclo forof para sumar los valores
    for (let i of productos.values()) {
        suma += i;
    }
    
    // Salida de datos
    document.write(`<b>Precio total: S/. ${suma}</b></p>`);
    console.log("Precio total: S/. " + suma);
    return suma;
}

precioTotal(productos);