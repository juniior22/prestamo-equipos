function registrarPrestamo(equipo, cantidad) {

    if (cantidad <= 0) {
        throw new Error("Cantidad inválida");
    }

    if (cantidad > equipo.stock) {
        throw new Error("Stock insuficiente");
    }

    equipo.stock -= cantidad;

    return equipo.stock;
}

module.exports = registrarPrestamo;