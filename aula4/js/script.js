function for1() {
  for (var x = 1; x <= 10; x++) {
    console.log("Contei " + x);
  }
}
function par() {
  for (var x = 1; x <= 20; x++) {
    if (x % 2 == 0) {
      console.log("Este numero é par: " + x);
    }
  }
}
function tabuada() {
  n2 = prompt("Digite um valor ");
  for (var n1 = 1; n1 <= 10; n1++) {
    console.log("Resultado:  " + n2 + " X " + n1 + " = " + n1 * n2);
  }
}
function calcularcpf() {
  var cpfusuario;
  var cpf9;
  var peso10 = 10;
  var peso11 = 11;
  var resultado = 0;
  var resto;

  //cpfusuario = prompt("Digite o seu cpf")

  cpfusuario = document.getElementById("cpf").value;

  //   cpfusuario = prompt("Digite o cpf ");
  cpf9 = cpfusuario.substring(0, 9);
  console.log(cpf9);
  for (var i = 0; i <= 8; i++) {
    console.log(cpf9[i]);

    resultado = cpf9[i] * peso10;

    peso10--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  resultado = 0;

  for (var i = 0; i <= 9; i++) {
    console.log(cpf9[i]);

    resultado = cpf9[i] * peso11;

    peso10--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  if (cpf9 == cpfusuario) {
    alert("CPF válido");
  } else {
    alert("CPF Invalido");
  }
}
