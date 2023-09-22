// "img/SemaforoVermelhoSemFundo.png"
const imagens = ["img/SemaforoVerdeSemFundo.png", "img/SemaforoAmareloSemFundo.png", "img/SemaforoVermelhoSemFundo.png"];
let i = 0;
let timeoutId = null; // Variável para armazenar o ID do timeout

//função atomática
function trocar() {
    const minhaImagem = document.getElementById('figura');
    //troca a imagem(caminho src"") relacionada ao indice
    minhaImagem.src = imagens[i];

    i++; // Incrementa i em 1

    if (i >= imagens.length) { // se i for maior que o comprimento do vetor(3), então zera o i
        i = 0; // Reinicia i para 0 quando atinge o final do array
    }

    // Define os tempos de troca com base na imagem atual
    let tempoTroca = 2500; // Tempo padrão (vermelho para verde) demora 5 segundos
    if (i === 2) { // se índice 2 (Semáforo cor vermelha) o tempo muda para 1 segundo
        tempoTroca = 1000; // o tempo de troca do amarelo para verde é de 1 segundo
    }

    // Define o próximo timeout para troca
    timeoutId = setTimeout(trocar, tempoTroca);
}


//função parada
function botao() {
    //chama a referencia do ID
    const minhaImagem = document.getElementById('figura');
      // Define a origem da imagem como a terceira imagem no array 'imagens'
    minhaImagem.src = imagens[2];
    i=0;
    setTimeout(function() {
        minhaImagem.src = imagens[i];
        // Reinicia o ciclo de troca de imagens
        setTimeout(trocar, 0);
    }, 2500); // 4000 milissegundos (10 segundos)
    clearTimeout(timeoutId);
}





// Inicia a função, o tempo de 0 segundos significa que a função irá rodar imediatamente sem atrasos
setTimeout(trocar, 0);
