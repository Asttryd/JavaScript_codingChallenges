//Faça um programa que leia do usuário uma temperatura em Fahrenheit
//converta-a para graus Celsius e escreva o novo valor na tela
//A fórumla de conversão de Fahrenheit (F) para Celsius (C) é C = ((F - 32) * 5) / 9

var fahrenheit = Number (prompt("Digite a temperatura em Fahrenheit: "));

function conversor(fa) {
    var celsius = ((fa - 32) * 5) / 9;
    return celsius;
}

alert(fahrenheit + " F° é o mesmo que: " + conversor(fahrenheit) + " C°");