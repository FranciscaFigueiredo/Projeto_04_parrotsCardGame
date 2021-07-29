let quantidadeDeCartas = "";

validarQuantidade();

function validarQuantidade() {
    quantidadeDeCartas = prompt("Qual a quantidade de cartas que deseja jogar?");
    
    if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 !== 0) {
        alert("A quantidade de cartas tem que ser um valor PAR entre 4 e 14");
        validarQuantidade();
    }
}