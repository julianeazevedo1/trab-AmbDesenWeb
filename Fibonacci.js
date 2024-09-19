function fibonacci(n) {
    const sequencia = [0, 1]; // Inicia a sequência com os dois primeiros termos

    if (n <= 1) {
        return sequencia.slice(0, n); // Retorna apenas os termos que estão no intervalo
    }

    for (let i = 2; i < n; i++) {
        const proximo = sequencia[i - 1] + sequencia[i - 2]; // Soma dos dois últimos termos
        sequencia.push(proximo); // Adiciona o novo termo à sequência
    }

    return sequencia; // Retorna a sequência completa
}

// Exemplo de uso
const n = 10; // Altere este valor para calcular mais ou menos termos
const resultado = fibonacci(n);
console.log(`Os primeiros ${n} termos da sequência de Fibonacci são:`, resultado);
