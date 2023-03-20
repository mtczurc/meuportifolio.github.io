const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById('video');

botaoTrailer.addEventListener('click', (e) => {
   modal.classList.add("aberto");
   video.setAttribute("src", "./src/video/OPG1.mp4")
});

botaoFecharModal.addEventListener('click', (e) => {
   modal.classList.remove("aberto");
   video.setAttribute("src", "");
});
