//Faça um programa que leia 3 números, SOME-os e exiba a MÉDIA entre eles.

var v1 = Number (prompt("Digite o 1º número: "));
var v2 = Number (prompt("Digite o 2º número: "));
var v3 = Number (prompt("Digite o 3º número: "));

function media(n1, n2, n3) {
    var resultado = (n1 + n2 + n3) / 3
    return resultado
}

alert("A média entre os números: " + v1 + ' ' + v2 + ' e ' + v3 + ' é: ' + media(v1, v2, v3));