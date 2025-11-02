// 6.	Crea un Set con nombres y elimina los repetidos automáticamente

console.log("Ejercicio 4 (6.)")
document.write(`<h3>Ejercicio 4</h3>`);

// Creación del Set
let nombres = new Set(["Jocinero", "Esdras", "Cleofás", "Esdras", "Cleofás", "Miriam", "Viridiana", "Miriam"]);

// Salida de datos
console.log(nombres);
document.write(`<p>Nombres:<br>`);
for (const nombre of nombres) {
    document.write(`- ${nombre}<br>`);
}
document.write(`</p>`);