const precio = 600; 
const resultado = calcularPrecioFinal(precio);

console.log(`IVA (16%): ${resultado.iva.toFixed(2)}`);
console.log(`Precio final: ${resultado.precioFinal.toFixed(2)}`);
function calcularPrecioFinal(precio) {
    let descuento = 0;

    if (precio >= 600 && precio <= 699) {
        descuento = 0.05;
    } else if (precio >= 1000 && precio <= 1999) {
        descuento = 0.10;
        
    } else if (precio >= 2000) {
        descuento = 0.15;
    }
    const precioConDescuento = precio * (1 - descuento);

    const iva = precioConDescuento * 0.16;

    const precioFinal = precioConDescuento + iva;

    return {
        precioInicial: precio,
        descuentoAplicado: descuento * 100,
        precioConDescuento: precioConDescuento,
        iva: iva,
        precioFinal: precioFinal
    };
}
