const vetorIndices = [1, 2, 3];

let posicaoAtual = 0;

const cards = document.querySelectorAll('#grid-img .grid-item');
const btnAnterior = document.getElementById('btn-prev');
const btnProximo = document.getElementById('btn-next');

function atualizarSelecao() {
    cards.forEach(card => card.classList.remove('selected'));

    const indiceImagemAlvo = vetorIndices[posicaoAtual] - 1;

    if (cards[indiceImagemAlvo]) {
        cards[indiceImagemAlvo].classList.add('selected');
    }
}

btnProximo.addEventListener('click', () => {
    if (posicaoAtual >= vetorIndices.length - 1) {
        posicaoAtual = 0;
    } else {
        posicaoAtual++;
    }
    atualizarSelecao();
});

btnAnterior.addEventListener('click', () => {
    if (posicaoAtual <= 0) {
        posicaoAtual = vetorIndices.length - 1;
    } else {
        posicaoAtual--;
    }
    atualizarSelecao();
});

atualizarSelecao();