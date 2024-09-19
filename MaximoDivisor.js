function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b; // Calcula o resto da divisão
        a = temp; // Atualiza a
    }
    return a; // Quando b é 0, a é o MDC
}

// Exemplo de uso
const num1 = 48; // Altere este valor
const num2 = 18; // Altere este valor
const resultado = mdc(num1, num2);
console.log(`O máximo divisor comum de ${num1} e ${num2} é: ${resultado}`);
