let jogadorDaVez, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let quadradosMapeados = document.getElementsByClassName('quadrado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')
let jogadorXVitórias = 0;
let jogadorOVitórias = 0;

trocarJogador ("X");

function aumentarVitoriaJogadorX() {
    jogadorXVitórias++;
    atualizarPlacar();
  }
  
  function aumentarVitoriaJogadorO() {
    jogadorOVitórias++;
    atualizarPlacar();
  }  

function ExecutarClickQuadrado(id) {
    if (vencedor != null) {
        return
    }
    
    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML != "-"){
        return;
    }
    
    quadrado.innerHTML = jogadorDaVez;
    quadrado.style.color = '#121212';

    if (jogadorDaVez === "X") {
        jogadorDaVez = "O";
    } else {
        jogadorDaVez = "X";
    }

    trocarJogador(jogadorDaVez)
    checaVencedor()
}

function trocarJogador (valor) {

    jogadorDaVez = valor;
    jogadorSelecionado.innerHTML = jogadorDaVez;
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1)
    var quadrado2 = document.getElementById(2)
    var quadrado3 = document.getElementById(3)
    var quadrado4 = document.getElementById(4)
    var quadrado5 = document.getElementById(5)
    var quadrado6 = document.getElementById(6)
    var quadrado7 = document.getElementById(7)
    var quadrado8 = document.getElementById(8)
    var quadrado9 = document.getElementById(9)

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3)
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
  
    if (vencedor === "X") {
      aumentarVitoriaJogadorX();
    } else if (vencedor === "O") {
      aumentarVitoriaJogadorO();
    }
  }
  
function atualizarPlacar() {
    let textos = document.getElementsByClassName("textos")[0];
    textos.children[0].innerHTML = `Jogador "X": ${jogadorXVitórias}`;
    textos.children[1].innerHTML = `Jogador "O": ${jogadorOVitórias}`;
}  

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "#2dcf2d";
    quadrado2.style.background = "#2dcf2d";
    quadrado3.style.background = "#2dcf2d";
}


function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eIgual = false;

    if (quadrado1.innerHTML != '-' && quadrado1.innerHTML === quadrado2.innerHTML && 
    quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }

    return eIgual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = ' ';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i)
        quadrado.style.background = "#e6e6e6";
        quadrado.style.color = "#e6e6e6";
        quadrado.innerHTML = "-";
    }

    trocarJogador("X")
}

// https://www.myinstants.com/en/instant/vine-boom-sound-70972/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/anime-wow/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/spongebob-fail-11236/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/error-soundss-25534/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/som-do-zap-zap-estourado-15594/?utm_source=copy&utm_medium=share
// https://www.myinstants.com/en/instant/rizz-sound-effect-54189/?utm_source=copy&utm_medium=share