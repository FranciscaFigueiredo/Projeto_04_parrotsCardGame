let quantidadeDeCartas = "";
const baralho = [];
let cartasNaoRepetitas;
let viradas = 0;
let id = 0;
let id2 = 0;
let jogadas = 0;
let acertos = 0;

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

    for (let i = 0; i < quantidadeDeCartas; i++) {
        container.innerHTML += `<div class="card" onclick="virarCarta(this);"><div class="front"><img src="assets/front.png"></div><div class="carta-virada">${baralho[i]}</div></div>`;
    }
}

function virarCarta(card) {
    card.classList.toggle("selecionada")
    const imagem = card.querySelector(".front");
    const virar = card.querySelector(".carta-virada")
    let primeira = 0;
    let segunda = 0;
    let imagem1;
    let imagem2;
    let idCard = 0;
    
    if (viradas !== 2) {
        imagem.classList.toggle("esconder");
        
        virar.classList.toggle("selecionada");
        viradas++;

        idCard = virar.querySelector(".selecionada img").alt;
        console.log(idCard)
        if (viradas === 1) {
            imagem1 = card.querySelector(".selecionada div");
            virar.classList.toggle("primeira");
            
            primeira = virar.querySelector(".primeira");
            id = idCard;
        } else if (viradas === 2) {
            imagem2 = card.querySelector(".selecionada div");
            virar.classList.toggle("segunda");
            
            segunda = virar.querySelector(".segunda");
            id2 = idCard;
            if (!verificarIguais(id, id2, card)) {
                setTimeout(function () {
                    imagem1.classList.toggle("esconder");
                    imagem2.classList.toggle("esconder")
                    
                    primeira.classList.toggle("esconder");                
                    segunda.classList.toggle("esconder");
                }, 1000);
                viradas = 0;
            }
        }
    }
    
}
let primeiraCarta;
    let segundaCarta;
function verificarIguais(id, id2, card) {
    const carta = card.querySelector(".selecionada");
    primeiraCarta = document.querySelector(".primeira");
    segundaCarta = document.querySelector(".segunda");
    console.log(primeiraCarta);
    // let imagemVirada1 = carta.querySelector(".front");
    // let imagemVirada2 = carta.querySelector(".front");
    // console.log(imagemVirada1)
    jogadas ++;
    if (id === id2) {
        acertos ++;
        if (acertos === quantidadeDeCartas / 2) {
            alert("Você ganhou em X jogadas!");
        }
        viradas = 0;
        return true;
        
    } else {
        // setTimeout(function () {
            
        //     carta.classList.toggle("esconder");
            
        //     primeiraCarta.classList.toggle("primeira");                
        //     segundaCarta.classList.toggle("segunda");
        // }, 1000);
        viradas = 0;
        return false;
    }
    console.log(primeiraCarta)
}