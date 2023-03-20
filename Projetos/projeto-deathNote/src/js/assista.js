const assista = document.querySelector('.assista');
const botaoFecharAssista = document.querySelector('.fechar-hide');
const hide = document.querySelector('.hide-assista');
const conteudoAssista = document.querySelector(".conteudo-hide");

assista.addEventListener('click', (e) => {
    hide.classList.add("aberto");
   
 });

 botaoFecharAssista.addEventListener('click', (e) =>{
    hide.classList.remove("aberto");
 })