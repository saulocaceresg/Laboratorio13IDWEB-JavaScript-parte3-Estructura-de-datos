// 13.	Crea una función llamada combinarCatalogos(tiendaA, tiendaB) que reciba dos objetos donde:
// Cada propiedad representa el nombre de un producto y su valor es el precio 
// La función debe devolver un nuevo objeto que: 
// •	Combine ambos catálogos de las tiendas 
// •	Si un producto aparece en ambos, se debe mantener el precio más bajo
// •	Y todos los precios finales deben convertirse a dos decimales
// •	TiendaA: laptop: 3500.5, mouse: 100.35, teclado: 250.9
// •	TiendaB: mouse: 95.2, monitor: 720.457, teclado: 260.1

console.log("Ejercicio 11 (13.)");
document.write(`<h3>Ejercicio 11</h3>`);

let tiendaA = {
    lapiz: 2.43,
    cuaderno: 30,
    mochila: 15.323,
    plumones: 9.122,
    temperas: 12
};

let tiendaB = {
    cuaderno: 35,
    carne: 10.1234,
    pollo: 9.223,
    cerdo: 12.877,
    pescado: 15
};

function combinarCatalogos(tiendaA, tiendaB) {
    Object.keys(tiendaA).forEach(clave => {
        tiendaA[clave] = parseFloat(tiendaA[clave].toFixed(2));
    });
    Object.keys(tiendaB).forEach(clave => {
        tiendaB[clave] = parseFloat(tiendaB[clave].toFixed(2));
    });
    return nuevoObjeto = {
        ...tiendaA,
        ...tiendaB,
    };
}

const objetoResultante = { ...combinarCatalogos(tiendaA, tiendaB) };

console.log("TIENDA A:");
document.write(`<p><b>Tienda A:</b><br>`);
Object.keys(tiendaA).forEach(clave => {
    console.log(`- ${clave}: S/. ${tiendaA[clave]}`);
    document.write(`- ${clave}: S/. ${tiendaA[clave]}<br>`);
});
document.write(`</p>`);

console.log("TIENDA B:");
document.write(`<p><b>Tienda B:</b><br>`);
Object.keys(tiendaB).forEach(clave => {
    console.log(`- ${clave}: S/. ${tiendaB[clave]}`);
    document.write(`- ${clave}: S/. ${tiendaB[clave]}<br>`);
});
document.write(`</p>`);

console.log("TIENDAS A y B:");
document.write(`<p><b>Tiendas juntas:</b><br>`);
Object.keys(objetoResultante).forEach(clave => {
    console.log(`- ${clave}: S/. ${objetoResultante[clave]}`);
    document.write(`- ${clave}: S/. ${objetoResultante[clave]}<br>`);
});
document.write(`</p>`);
