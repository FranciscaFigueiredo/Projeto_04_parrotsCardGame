let quantidadeDeCartas = "";
const baralho = [];
let cartasNaoRepetitas;
let viradas = -1;
let id = 0;
let id2 = 0;

const cartas = [
    '<img src="assets/bobrossparrot.gif" alt="1" />',
    '<img src="assets/explodyparrot.gif" alt="2" />',
    '<img src="assets/fiestaparrot.gif" alt="3" />',
    '<img src="assets/metalparrot.gif" alt="4" />',
    '<img src="assets/revertitparrot.gif" alt="5" />',
    '<img src="assets/tripletsparrot.gif" alt="6" />',
    '<img src="assets/unicornparrot.gif" alt="7" />'
];

validarQuantidade();

function validarQuantidade() {
    quantidadeDeCartas = Number(prompt("Qual a quantidade de cartas que deseja jogar?"));
    
    if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 !== 0) {
        alert("A quantidade de cartas tem que ser um valor PAR entre 4 e 14");
        validarQuantidade();
    }

    adicionarCartas();
}

function adicionarCartas() {
    cartas.sort(comparador);
    cartasNaoRepetitas = quantidadeDeCartas / 2;
    for (let i = 0; i < quantidadeDeCartas; i++) {
        if (i < cartasNaoRepetitas) {
            baralho.push(cartas[i]);
        } else {
            baralho.push(cartas[i - cartasNaoRepetitas]);
        }
        console.log(baralho[i])
    }

    baralho.sort(comparador);

    colocarCartas()
}

function comparador() {
    return Math.random() - 0.5;
}

function colocarCartas(carta, indice) {
    const container = document.querySelector(".container");
     const card = container.querySelector(".card");

    for (let i = 0; i < quantidadeDeCartas; i++) {
        container.innerHTML += `<div class="card" onclick="virarCarta(this);"><img src="assets/front.png" alt="front"><div class="carta-virada">${baralho[i]}</div></div>`;
    }
}

function virarCarta(card) {
    const virar = card.querySelector(".carta-virada")
    let idCard = 0;
    let imagem = card.querySelector(".card img");
    imagem.classList.toggle("esconder");
    
    virar.classList.toggle("selecionada");
    viradas++;

    idCard = card.querySelector(".selecionada alt");
        id = idCard;
    console.log(idCard);    
}

function verificarIguais(card) {

}
