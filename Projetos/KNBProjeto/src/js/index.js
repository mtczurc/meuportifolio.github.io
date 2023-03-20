

//precisamos criar duas variaveisno JS pra trabalhar com os elementos da tela

const listaSelecaoKNB = document.querySelectorAll('.knb-list')
const KNBCard = document.querySelectorAll('.cartao-knb')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

listaSelecaoKNB.forEach(knb => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons 
    knb.addEventListener('click',() => {
        
        const cartaoKNBAberto = document.querySelector('.aberto')
        cartaoKNBAberto.classList.remove('aberto')
        
        //ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
         const idKNBSelecionado = knb.attributes.id.value

         const idDoCartaoKNBParaAabrir = 'cartao-' + idKNBSelecionado

         const cartaoKNBSelecionado = document.getElementById(idDoCartaoKNBParaAabrir)
         cartaoKNBSelecionado.classList.add('aberto')


        //-remover a classe ativo que marca o pokemon selecionado
        const knbAtivoNaListagem = document.querySelector('.ativo')
        knbAtivoNaListagem.classList.remove('ativo')

        //-add a classe ativo no item da lista selecionado
        const knbSelecionadoNaListagen = document.getElementById(idKNBSelecionado)
        knbSelecionadoNaListagen.classList.add('ativo')
    })
})



