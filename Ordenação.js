function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Se o array tiver 0 ou 1 elemento, já está ordenado
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Escolhe o pivô
    const left = arr.filter(x => x < pivot); // Elementos menores que o pivô
    const middle = arr.filter(x => x === pivot); // Elementos iguais ao pivô
    const right = arr.filter(x => x > pivot); // Elementos maiores que o pivô

    return [...quicksort(left), ...middle, ...quicksort(right)]; // Recursão
}

// Exemplo de uso
const array = [34, 7, 23, 32, 5, 62]; // Altere este array para testar
const sortedArray = quicksort(array);
console.log("Array ordenado:", sortedArray);
