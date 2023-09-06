// // Declaração das variáveis que armazenam os caminhos das imagens
// var imgApa = "img/apagada.jpg"; // Imagem vermelha
// var imgAce = "img/ybxlO.jpg";    // Imagem amarela
// var imgQue = "img/quebrada.jpg";      // Imagem verde

// // Definição da função "trocar" que alterna as imagens
// function trocar() {
//     // Define o atributo "src" da imagem com id "figura" para o caminho da imagem vermelha
//     document.getElementById("figura").src = imgApa;

//     // Troca os valores das variáveis para a próxima imagem a ser exibida
//     let aux = imgApa;
//     imgApa= imgAce;
//     imgAce = aux;

//     //==============

//     // Troca os valores das variáveis novamente para a próxima imagem a ser exibida
//     let aux1 =imgAce ;
//     imgAce = imgQue;
//     imgQue = aux1;



// }
// var imagem = document.getElementById("minhaImagem");

// // Adiciona um evento de clique à imagem
// imagem.addEventListener("click", function() {
//     document.getElementById("figura").src = imgApa;

//     // Troca os valores das variáveis para a próxima imagem a ser exibida
//     let aux = imgApa;
//     imgApa= imgAce;
//     imgAce = aux;

//     //==============

//     // Troca os valores das variáveis novamente para a próxima imagem a ser exibida
//     let aux1 =imgAce ;
//     imgAce = imgQue;
//     imgQue = aux1;
//     // Coloque aqui o código que deseja executar quando a imagem for clicada
//     // Por exemplo, trocar a imagem ou realizar alguma ação
//     alert("A imagem foi clicada!");
// });

// function resetarImagens() {
//     document.getElementById("imagem1").src = "img/ybxlO.jpg"; // Reset para a imagem 1
//     document.getElementById("imagem1").alt = "Imagem 1";
//     contadorTrocas = 0; // Reseta o contador de trocas
// }


// var imgApa = "img/apagada.jpg"; // Imagem vermelha
// var imgAce = "img/ybxlO.jpg";    // Imagem amarela
// var imgQue = "img/quebrada.jpg";      // Imagem verde

// // Variáveis para controlar a troca de imagens
// var contadorTrocas = 0;
// var imagens = [imgApa, imgAce];
// var imagemAtual = 0;

// // Função para trocar a imagem
// function trocarImagem() {
//     contadorTrocas++;

//     if (contadorTrocas % 5 === 0) {
//         document.getElementById("minhaImagem").src = imgQue; // Troca para a imagem 3
//         document.getElementById("minhaImagem").alt = "Imagem 3";
//     } else {
//         imagemAtual = (imagemAtual + 1) % 2;
//         document.getElementById("minhaImagem").src = imagens[imagemAtual]; // Troca para a próxima imagem
//         document.getElementById("minhaImagem").alt = "Imagem " + (imagemAtual + 1);
//     }
// }

// // Função para resetar a imagem e o contador de trocas
// function resetarImagens() {
//     document.getElementById("minhaImagem").src = imgAce; // Reset para a imagem 1
//     document.getElementById("minhaImagem").alt = "Imagem 1";
//     contadorTrocas = 0; // Reseta o contador de trocas
//     imagemAtual = 0; // Reseta a imagem atual
// }

let lampada = document.getElementById("minhaImagem");
let cont = 0;
let lampadaOk = true;
let lampadaAcesa = false;
function acender() {
    if (lampadaAcesa==false) {
        lampadaAcesa = true;
        lampada.src = "img/ybxlO.jpg";
        cont++;
        if (cont > 5) {
            lampada.src = "img/quebrada.jpg";
            lampadaOk = false;
        }
    }else if(lampadaOk){
        lampadaAcesa = false;
        lampada.src = "img/apagada.jpg";
    }
}

function trocar() {
    cont = 0;
    lampada.src = "img/apagada.jpg";
    lampadaOk = true;
    lampadaAcesa = false;

}
lampada.addEventListener("click",acender);






