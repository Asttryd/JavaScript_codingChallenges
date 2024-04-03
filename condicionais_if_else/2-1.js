//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado APENAS SE
//o resultado for maior que 100

var n1 = Number (prompt("Digite o 1º número: "));
var n2 = Number (prompt("Digite o 2º número: "));

var soma = n1 + n2;

function retornaSoma(sum) {
    if (sum >= 100) {
        alert(sum);
    }
}

retornaSoma(soma);