const mostrarLight = document.getElementById('btn-light');
const mostrarL = document.getElementById('btn-l');
const mostrarRyuk = document.getElementById('btn-ryuk');
const mostrarMisa = document.getElementById('btn-misa');
const mostrarNear = document.getElementById('btn-near');
const mostrarMello = document.getElementById('btn-mello');

mostrarLight.addEventListener('click', function(){
    mostrarPersonagemLight();
});

mostrarL.addEventListener('click', function(){
    mostrarPersonagemL();
});

mostrarRyuk.addEventListener('click', function(){
    mostrarPersonagemRyuk();
});

mostrarMisa.addEventListener('click', function(){
    mostrarPersonagemMisa();
});

mostrarNear.addEventListener('click', function(){
    mostrarPersonagemNear();
});

mostrarMello.addEventListener('click', function(){
    mostrarPersonagemMello();
});

/* ================== Function ================== */ 

function mostrarPersonagemLight(){
    const cardOcultoLight = document.getElementById('mostrar-light');
    cardOcultoLight.classList.toggle("hide");
    
};

function mostrarPersonagemL(){
    const cardOcultoL = document.getElementById('mostrar-l');
    cardOcultoL.classList.toggle("hide");
};

function mostrarPersonagemRyuk(){
    const cardOcultoRyuk = document.getElementById('mostrar-ryuk');
    cardOcultoRyuk.classList.toggle("hide");
};

function mostrarPersonagemMisa(){
    const cardOcultoMisa = document.getElementById('mostrar-misa');
    cardOcultoMisa.classList.toggle("hide");
};

function mostrarPersonagemNear(){
    const cardOcultoNear = document.getElementById('mostrar-near');
    cardOcultoNear.classList.toggle("hide");
};

function mostrarPersonagemMello(){
    const cardOcultoMello = document.getElementById('mostrar-mello');
    cardOcultoMello.classList.toggle("hide");
};

