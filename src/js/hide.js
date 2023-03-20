var btnMostrar = document.getElementById('mostrar');


btnMostrar.addEventListener('click', function() {
  mostrarCard();
  
});

function mostrarCard() {
  const cardsOcultos = document.querySelector('.projetosB');
  cardsOcultos.classList.toggle("hide");

  const cardsOcultos2 = document.querySelector('.projetosC');
  cardsOcultos2.classList.toggle("hide");
};
   





