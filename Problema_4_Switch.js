const precio = 1500;
const resultado = calcularPrecioFinal(precio);

console.log(`IVA (16%): ${resultado.iva.toFixed(2)}`);
console.log(`Precio final: ${resultado.precioFinal.toFixed(2)}`);
function calcularPrecioFinal(precio) {
    let descuento = 0;
    let categoria;

    switch (true) {
        case (precio >= 600 && precio <= 699):
            categoria = '5% de descuento';
            descuento = 0.05;
            break;
        case (precio >= 1000 && precio <= 1999):
            categoria = '10% de descuento';
            descuento = 0.10;
            break;
        case (precio >= 2000):
            categoria = '15% de descuento';
            descuento = 0.15;
            break;
        default:
            categoria = 'Sin descuento';
            descuento = 0;
            break;
    }
    const precioConDescuento = precio * (1 - descuento);

    const iva = precioConDescuento * 0.16;

    const precioFinal = precioConDescuento + iva;

    return {
        precioInicial: precio,
        categoriaDescuento: categoria,
        precioConDescuento: precioConDescuento,
        iva: iva,
        precioFinal: precioFinal
    };
}
