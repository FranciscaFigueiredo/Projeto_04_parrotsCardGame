let quantidadeDeCartas = "";
const baralho = [];

const cartas = [
    '<img src="assets/bobrossparrot.gif" alt="bobrossparrot" />',
    '<img src="assets/explodyparrot.gif" alt="explodyparrot" />',
    '<img src="assets/fiestaparrot.gif" alt="fiestaparrot" />',
    '<img src="assets/metalparrot.gif" alt="metalparrot" />',
    '<img src="assets/revertitparrot.gif" alt="revertitparrot" />',
    '<img src="assets/tripletsparrot.gif" alt="tripletsparrot" />',
    '<img src="assets/unicornparrot.gif" alt="unicornparrot" />'
];

validarQuantidade();

function validarQuantidade() {
    quantidadeDeCartas = prompt("Qual a quantidade de cartas que deseja jogar?");
    
    if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 !== 0) {
        alert("A quantidade de cartas tem que ser um valor PAR entre 4 e 14");
        validarQuantidade();
    }

    adicionarCartas();
}

function adicionarCartas() {
    let cartasNaoRepetitas = quantidadeDeCartas / 2;
    for (let i = 0; i < quantidadeDeCartas; i++) {
        if (i < cartasNaoRepetitas) {
            baralho.push(cartas[i]);
        } else {
            baralho.push(cartas[i - cartasNaoRepetitas]);
        }
    }

    baralho.sort(comparador); // Após esta linha, baralho estará embaralhada

    colocarCartas()
}

function comparador() {
    return Math.random() - 0.5;
}

function colocarCartas() {
    const container = document.querySelector(".container");
    const card = document.querySelector(".primeira-virada");

    if (!card) {
        for (let i = 0; i < quantidadeDeCartas; i++) {
            container.innerHTML += `<div class="card" onclick="verificarIguais(this);"><img src="assets/front.png" alt="front"></div>`
        }
    } else {
        for (let i = 0; i < quantidadeDeCartas; i++) {
            card.innerHTML = `${baralho[i]}`
        }
    }
}


function verificarIguais(card) {
    const comparar = document.querySelector(".primeira-virada")
    console.log(comparar)
    if (comparar) {
        card.classList.toggle("primeira-virada");
    } else {
        card.classList.toggle("segunda-virada")
    }
    // setTimeout(colocarCartas, 1000);
    colocarCartas();
}


