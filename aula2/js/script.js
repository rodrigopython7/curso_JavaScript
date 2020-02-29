//Vamos criar uma janela de alerta para saudar os usuarios
alert("Seja bem-vindo");
/*
vamos pedir para o usuario digitar o seu nome, e depois mostraremos em uma caixa de alerta.
Para executar a operação iremos guardar o nome do usuario em uma variável. Essa variável terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome: ", "Escreva seu nome aqui");
alert(nome);

/*
Para apresentar o nome do usuario na página html foi necessario criar algum elemento de "link\relação" da 
página html com javascript. 
Para esse vinculo usamos o comando document.getElementById
-documnent refere-se ao body da página html 
-get (obter)Element(elemento)By(por)Id(identificação)
-inner (interno, ou seja, dentro)Html
Então pegamos um elemento que está body por seu id e 
inserimos um conteudo em html, que neste caso é o nome do usuario
*/
document.getElementById("titulo").innerHTML = nome;
