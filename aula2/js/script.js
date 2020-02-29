//Vamos criar uma janela de alerta para saudar os usuarios
alert("Seja bem-vindo");
/*
vamos pedir para o usuario digitar o seu nome, e depois mostraremos em uma caixa de alerta.
Para executar a operação iremos guardar o nome do usuario em uma variável. Essa variável terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome: ", "Escreva seu nome aqui");
alert(nome);

document.getElementById("titulo").innerHTML = nome;
