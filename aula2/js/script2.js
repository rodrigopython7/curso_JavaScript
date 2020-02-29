// Criação de duas variaveis para realização de calculos matematicos//
var n1;
var n2;

// interagir com o usuario e pedir os valores para n1 e n2//

n1 = prompt("Digite um valor", "");
n2 = prompt("Digite outro valor", "");

// Para o Javascript realizar a operação aritmética de soma é necessario fazer a conversão das variaveis n1 e n2
// Para numero, pois o retorno do prompt é sempre tratada o seu conteudo como texto.  Faremos a conversão
// usando o comando parseInt(passe para inteiro)

n1 = parseInt(n1);
n2 = parseInt(n2);

soma = n1 + n2;
subtrair = n1 - n2;
multiplicar = n1 * n2;
dividir = n1 / n2;
resto = n1 % n2;

//vamos apresentar os resultados em tela de console//

console.log(soma);
console.log(subtrair);
console.log(multiplicar);
console.log(dividir);
console.log(resto);
