// 11.	Crea un objeto auto con propiedades marca, modelo, año, y un método detalles() que muestre sus datos

console.log("Ejercicio 9 (11.)");
document.write(`<h3>Ejercicio 9</h3>`);

// Objeto auto
const auto = {
    marca: "Lamborghini",
    modelo: "Convertible",
    anio: "2020",
    // Método para devolver los detalles (datos) del auto
    detalles() {
        document.write(`<p><b>Detalles del auto:</b><br>- Marca: ${this.marca}<br>- Modelo: ${this.modelo}<br>- Año: ${this.anio}</p>`);
        console.log(`Detalles del auto:\n- Marca: ${this.marca}\n- Modelo: ${this.modelo}\n- Año: ${this.anio}`);
    }
};

auto.detalles();