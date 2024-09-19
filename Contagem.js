function contarInteiros(conjunto, N) {
    let contador = 0; // Inicializa o contador

    if (conjunto.length === 0) return contador; // Se o conjunto estiver vazio, retorna 0

    const primeiroDado = conjunto[0]; // Primeiro dado do conjunto

    for (let numero of conjunto) {
        if (numero >= primeiroDado && numero <= N) {
            contador++; // Incrementa o contador se o número estiver no intervalo
        }
    }

    return contador; // Retorna o total de inteiros contados
}

// Exemplo de uso
const conjunto = [1, 5, 7, 10, 15, 20]; // Altere este conjunto para testar
const N = 10; // Altere este valor para definir o limite superior
const total = contarInteiros(conjunto, N);
console.log(`Total de inteiros entre ${conjunto[0]} e ${N}: ${total}`);
