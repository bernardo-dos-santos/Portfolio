
const dadosCardGestaoEquipamentos = {
    titulo: 'Gestão de Equipamentos',
    imagem: './assets/gestao-de-equipamentos.png',
    gif: 'https://i.imgur.com/G08suw8.gif',
    urlRepositorio: 'https://github.com/bernardo-dos-santos/GestaoEquipamentos-CSS.ConsoleApp',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ], 
    descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}
function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardGestaoEquipamentos)
        return;

    cardSelecionado = dadosCardGestaoEquipamentos;
    carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto")
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarSegundoCard();
};

document.addEventListener('DOMContentLoaded', main);