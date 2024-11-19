// DEV:LUCASS

document.addEventListener("DOMContentLoaded", function () {


    const tempoEmSegundos = 5; // Tempo em segundos do delay
    let contador = 730; // Número de pessoas na live
    const contadorElement = document.getElementById("contador");
    const comentariosContainer = document.getElementById("comentariosExibidos");
    const modeloComentario = document.querySelector(".coment");
    const modTitle = document.querySelector(".container-title>h2");
    const modDescri = document.querySelector(".info-you");
    let numeInitLiveMin = 30;
    let numeInitLiveMax = 60;
    const comentariosExibidos = [];
    let indiceComentario = 0; // Índice do comentário a ser exibido
    let showContent = true;
    const btnToggle = document.getElementById("btnToggle");


    modTitle.textContent = header[0].title;
    modDescri.textContent = header[0].descri;

    function toggleContent(){
        showContent = !showContent;
        comentariosContainer.style.display = showContent ? "block" : "none";
        btnToggle.textContent = showContent ?  "Hide chat":"Show chat";
    }

    function delay() {
        setTimeout(() => {
          btnToggle.style.display = "flex";
        }, tempoEmSegundos * 1000);
      }

    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function atualizarContador() {
        setInterval(() => {
            contador += gerarNumeroAleatorio(numeInitLiveMin, numeInitLiveMax);
            if(contador>1100) contador = 810;
            contadorElement.textContent = contador;
        }, gerarNumeroAleatorio(5000, 10000)); 
    }


    function exibirComentario() {
        if (indiceComentario < comentariosLive.length) {
          const comentario = comentariosLive[indiceComentario];
    
          
          const novoComentario = modeloComentario.cloneNode(true);
          novoComentario.style.display = "flex"; 
          novoComentario.querySelector("img").src = comentario.img;
          novoComentario.querySelector(".name").textContent = comentario.nome;
          novoComentario.querySelector(".text").textContent = comentario.texto;
    
          comentariosContainer.appendChild(novoComentario); 
          indiceComentario++;
    
          setTimeout(exibirComentario, gerarNumeroAleatorio(3000, 12000)); 
        }
      }
   
    modeloComentario.style.display = "none";
    contadorElement.textContent = contador;
    atualizarContador();
   
    exibirComentario();
});