const test = require('node:test');
const assert = require('node:assert');
const registrarPrestamo = require('../src/prestamo');

test('Préstamo válido', () => {
    const equipo = { nombre: 'Laptop', stock: 5 };

    const resultado = registrarPrestamo(equipo, 2);

    assert.strictEqual(resultado, 3);
});

test('Préstamo sin stock', () => {
    const equipo = { nombre: 'Laptop', stock: 2 };

    assert.throws(() => {
        registrarPrestamo(equipo, 5);
    }, /Stock insuficiente/);
});

test('Cantidad inválida', () => {
    const equipo = { nombre: 'Laptop', stock: 5 };

    assert.throws(() => {
        registrarPrestamo(equipo, 0);
    }, /Cantidad inválida/);
});