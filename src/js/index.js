
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", (e) => {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)

        selecionarInfo(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
};

function selecionarInfo(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    const idDoElentoDeInformacoesDaAba = `info-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElentoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
};