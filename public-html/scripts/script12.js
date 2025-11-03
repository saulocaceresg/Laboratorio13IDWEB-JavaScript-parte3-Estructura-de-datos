// 14.	Crea una función llamada gestionarEmpleados(empleados) que reciba un array de objetos, donde cada objeto representa un empleado con las siguientes propiedades:
// •	id: número, 
// •	nombre: string,
// •	area: string,
// •	salario: número 
// La función debe: 
// Crear un Map donde la clave sea el área (por ejemplo "Ventas", "TI", "Recursos Humanos"), y el valor sea un array con los nombres de los empleados que trabajan en esa área.

console.log("Ejercicio 12 (14.)");
document.write(`<h3>Ejercicio 12</h3>`);

const listaEmpleados = [
    { id: 1234, nombre: "Jorge", area: "Ventas", salario: 2400 },
    { id: 1235, nombre: "Adolf", area: "TI", salario: 2200 },
    { id: 1236, nombre: "Iosef", area: "RR.HH.", salario: 2400 },
    { id: 1237, nombre: "Benito", area: "Ventas", salario: 3400 },
    { id: 1238, nombre: "Perpetva", area: "RR.HH.", salario: 3300 },
    { id: 1239, nombre: "Casandra", area: "RR.HH.", salario: 1000 }
];

function gestionarEmpleados(empleados) {

    function nombresAreas(empleados) { // Función para almacenar los nombres de las áreas
        const areasNombres = [];
        for (let i = 0; i < empleados.length; i++) {
            const area = empleados[i].area;
            areasNombres.push(area);
        }
        console.log(areasNombres);
    
        for (let i = 0; i < areasNombres.length; i++) { // Cuenta y modifica el arreglo de areasNombres
            let actual = areasNombres[i];
            let contador = 1; // Inicia en uno porque la palabra actual se debe contar a sí misma
            for (let j = 0; j < areasNombres.length; j++) {
                if (actual === areasNombres[j] && j !== i) { // j != i para evitar que se vuelva a contar
                    contador++;
                    areasNombres.splice(j, 1); // se borra el repetido y se reduce el índice para evitar complejidades
                    j--;
                }
            }
        }

        return areasNombres;
    }

    let areas = nombresAreas(empleados);
    let mapEmpleados = new Map();
    let promedio = []; // Array para almacenar promedios de sueldos

    for (let i = 0; i < areas.length; i++) {
        let empleadosPorArea = [];
        let suma = 0, contEmpleados = 0;
        for (let j = 0; j < empleados.length; j++) {
            if (areas[i] === empleados[j].area) {
                empleadosPorArea.push(empleados[j].nombre);
                contEmpleados++;
                suma += empleados[j].salario;
            }
        }
        promedio[i] = parseFloat((suma / contEmpleados).toFixed(3));
        mapEmpleados.set(areas[i], empleadosPorArea);
    }
    console.log("Promedio de sueldos: ", promedio);
    return mapEmpleados;
}

const empleadosArea = gestionarEmpleados(listaEmpleados);

// Salida de datos
for (const [area, nombres] of empleadosArea) {
    document.write(area + " : { empleados [", nombres + "] }<br>");
    console.log(area + " : ", nombres);
}
