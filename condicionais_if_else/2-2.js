//Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.

//Faça uma função que receba 2 parâmetros, 'dano' e 'saúde'.
//A função deve retornar '1' SE o dano for matar o personagem (deixar a saúde menor ou igual a zero.)
//E retornar '0' caso contrário

var hp = Number (prompt("Digite a quantidade de hp que o personagem possui: "));
var dmg = Number (prompt("Digite o dano que o personagem levará: "));

function personagemMorreu (dano, saude) {

    if (dano >= saude) {
        alert('1 - Seu personagem morreu!');
    }
    else {
        alert('0 - Seu personagem está vivo.');
    }
}

personagemMorreu(dmg, hp);