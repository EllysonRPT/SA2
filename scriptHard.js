//===========================================================Pedra Papel Tesoura=============================================================
// Mapeia as opções do usuário para os caminhos das imagens
const imagensSelecao = {
    'Pedra': 'img/PedraSemFundo.png',
    'Papel': 'img/PapelSemFundo.png',
    'Tesoura': 'img/TesouraSemFundo.png'
};

let escolhaUsuario = '';
let caminhoEscolhaUsuario = '';
const ConfSelec = document.getElementById('ConfSelec');
let opcaoSelecionada = ''; // Variável para armazenar a opção selecionada

function verificarSelecao() {
    // se seleção estiver vazia não permite confirmar seleção
    if (escolhaUsuario !== "") {
        ConfSelec.disabled = false;
    } else {
        ConfSelec.disabled = true;
    }
}

//=============Seleção do Usuario=============================================
function Selecao(opcao) {
    escolhaUsuario = opcao;
    const imagemUsuario = document.getElementById('imagem1');
    // alert('Escolha do usuário: ' + escolhaUsuario);
    selecaoTexto.textContent = `Você selecionou: ${opcao}`;
    verificarSelecao(); // Verifica a seleção sempre que uma opção é escolhida
    opcaoSelecionada = opcao;
    // Atualiza a imagem do usuário com base na escolha
    imagemUsuario.src = imagensSelecao[opcao]

    // "Converte" a escolha do usuario para o caminho da imagem correspondente >>> será usado na function escolheVencedor
    if (escolhaUsuario === 'Pedra') {
        caminhoEscolhaUsuario = 'img/PedraSemFundo.png';
    }
    if (escolhaUsuario === 'Papel') {
        caminhoEscolhaUsuario = 'img/PapelSemFundo.png';
    }
    if (escolhaUsuario === 'Tesoura') {
        caminhoEscolhaUsuario = 'img/TesouraSemFundo.png';
    }
}
//===========================================================Resultado=============================================================

//============Sorteia a imagem do computador==================================
function sortearImagem() {
    const imagens = ["img/PedraSemFundo.png", "img/PapelSemFundo.png", "img/TesouraSemFundo.png"];
    // Gera um número aleatório entre 0 e 2 (a multiplicação pelo comprimento do vetor imagens quer dizer que ira sortear um número entre 0 e 2)
    //Math.random() sorteia um numero ente 0 e 1
    //Math.floor() arrendonda um número para inteiro
    const numeroAleatorio = Math.floor(Math.random() * imagens.length);

    // Pega a imagem no segundo card
    const minhaImagemSegundoCard = document.getElementById('imagem2');

    // Define o caminho da imagem com base no número aleatório gerado
    minhaImagemSegundoCard.src = imagens[numeroAleatorio];
    // retorna a imagem (caminho da imagem) esolhida aleatoriamente
    return imagens[numeroAleatorio];

}
//============Calacula o vencedor==================================

function escolheVencedor(caminhoEscolhaUsuario, escolhaComputador) {
    if (caminhoEscolhaUsuario === escolhaComputador) {
        return 'Jogou terminou em empate';
    } else if (
        (caminhoEscolhaUsuario === 'img/PedraSemFundo.png' && escolhaComputador === 'img/TesouraSemFundo.png') ||
        (caminhoEscolhaUsuario === 'img/PapelSemFundo.png' && escolhaComputador === 'img/PedraSemFundo.png') ||
        (caminhoEscolhaUsuario === 'img/TesouraSemFundo.png' && escolhaComputador === 'img/PapelSemFundo.png')
    ) {
        return 'Parabens. Você ganhou.';
    } else {
        return 'Que pena, o computador ganhou';
    }
}

//============Mostra a Section com o resultado==================================

function mostrarResultado() {
    var mostraResultado = document.getElementById("Resultado");
    var mostraGame = document.getElementById("Game");
    var botaoSelecao = document.getElementById("botaoSelecao");

    // Chame a função para sortear a imagem aleatória e a armazena o resultado na variavel escolhaComputador
    const escolhaComputador = sortearImagem();
    const vencedor = escolheVencedor(caminhoEscolhaUsuario, escolhaComputador);

    selecaoTexto.textContent = `Resultado: ${vencedor}`;

    if (mostraResultado.style.display === "none") {
        mostraGame.style.display = "none";
        botaoSelecao.style.display = "none";
        mostraResultado.style.display = "block";
    } else {
        mostraResultado.style.display = "none";
    }
}

