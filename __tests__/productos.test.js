const filtrarProductos = require('../js/productos');

// Escribir los tests debajo

function filtrarProductos(productos, categoria) {
    return productos.filter(producto => producto.categoria === categoria);
}

module.exports = filtrarProductos;

// filtrarProductos.test.js
const filtrarProductos = require('./filtrarProductos');

describe('filtrarProductos', () => {

test('devuelve productos que coinciden con la categoría', () => {
    const productos = [
    { nombre: 'Camiseta', categoria: 'Hombre' },
    { nombre: 'Blusa', categoria: 'Mujer' },
    { nombre: 'Jeans', categoria: 'Hombre' },
    ];
    expect(filtrarProductos(productos, 'Hombre')).toEqual([
    { nombre: 'Camiseta', categoria: 'Hombre' },
    { nombre: 'Jeans', categoria: 'Hombre' },
    ]);
});

test('devuelve array vacío si la categoría no existe', () => {
    const productos = [{ nombre: 'Camiseta', categoria: 'Hombre' }];
    expect(filtrarProductos(productos, 'Infantil')).toEqual([]);
});

test('devuelve array vacío si el array de productos está vacío', () => {
    expect(filtrarProductos([], 'Hombre')).toEqual([]);
});

test('devuelve array vacío si la categoría es vacía o null', () => {
    const productos = [{ nombre: 'Camiseta', categoria: 'Hombre' }];
    expect(filtrarProductos(productos, '')).toEqual([]);
    expect(filtrarProductos(productos, null)).toEqual([]);
});

test('distingue entre mayúsculas y minúsculas', () => {
    const productos = [{ nombre: 'Camiseta', categoria: 'hombre' }];
    expect(filtrarProductos(productos, 'Hombre')).toEqual([]);
});

test('devuelve todos los productos si todos coinciden con la categoría', () => {
    const productos = [
    { nombre: 'Camiseta', categoria: 'Hombre' },
    { nombre: 'Jeans', categoria: 'Hombre' },
    ];
    expect(filtrarProductos(productos, 'Hombre')).toEqual(productos);
});
});
