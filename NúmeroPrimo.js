function primoOuNao(n) {
    //verificar o numero não pode ser inferior a 1
    if (n <= 1) return false;
    //verificar se o numero é 2 ou 3
    if (n <= 3) return true;
    //verificar se o numero passado é divisivel por 2 ou 3
    if (n % 2 == 0 || n % 3 == 0) return false;
    //o número 5 é o próximo número primo a ser verificado, então verificar multiplas condições. Cria-se um looping
    //Verificamos a condição i * i <= n
    //Entramos no loop e verificamos divisibilidade:
    //29 % 5 !== 0 (não divisível por 5)
    //29 % (5 + 2) = 29 % 7 ≠ 0 (não divisível por 7)
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
  }
  let primo = primoOuNao(3);
  console.log(primo);
  
  