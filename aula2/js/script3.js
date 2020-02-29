/*var nome = prompt("Digite o seu nome? ");
var tenis = prompt("Qual tênis vai comprar? ");
var descont = prompt("Qual o valor do desconto? ");

alert(nome + tenis + descont);

var valor = parseFloat(valor);

porcento = valor / 100;

console.log(valor);
*/

var nome_produto;
var valor;
var desconto;
nome_produto = prompt("Digite o nome do produto");
valor = prompt("Digite o valor do produto");
desconto = prompt("Digite o valor de descontpo do produto");

valor = parseFloat(valor);
desconto = parseFloat(desconto);

var resultado = (valor * desconto) / 100;
console.log(nome_produto);
console.log(valor - resultado);
