let jogadorDaVez = null;

let jogadorSelecionado = document.getElementById('jogador-selecionado')

trocarJogador ("X");

function ExecutarClickQuadrado(id) {
    alert('O quadrado foi clicado ' + id)

    var quadrado = document.getElementById(id);
    
    quadrado.innerHTML = jogadorDaVez;
    quadrado.style.color = '#121212';

    if (jogadorDaVez === "X") {
        jogadorDaVez = "O";
    } else {
        jogadorDaVez = "X";
    }

    trocarJogador(jogadorDaVez)
}

function trocarJogador (valor) {

    jogadorDaVez = valor;
    jogadorSelecionado.innerHTML = jogadorDaVez;
}

// https://www.myinstants.com/en/instant/vine-boom-sound-70972/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/anime-wow/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/spongebob-fail-11236/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/error-soundss-25534/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/som-do-zap-zap-estourado-15594/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/rizz-sound-effect-54189/?utm_source=copy&utm_medium=share