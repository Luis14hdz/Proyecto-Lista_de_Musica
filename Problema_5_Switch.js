const N1 = ?;
const N2 = ?;
const Noperador = '?';

console.log(realizarOperacion(N1, N2, Noperador));
function realizarOperacion(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            return `El resultado de ${num1} + ${num2} es: ${resultado}`;
        case '-':
            resultado = num1 - num2;
            return `El resultado de ${num1} - ${num2} es: ${resultado}`;
        case '*':
            resultado = num1 * num2;
            return `El resultado de ${num1} * ${num2} es: ${resultado}`;
        case '/':
            if (num2 === 0) {
                return "Usuario, no se puede dividir por cero(0) :/ ";
            } else {
                resultado = num1 / num2;
                return `El resultado de ${num1} / ${num2} es: ${resultado}`;
            }
        default:
            return "Operador no válido. Usa +, -, * o /.";
    }
}
