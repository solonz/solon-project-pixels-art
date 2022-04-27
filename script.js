const cores = document.querySelectorAll('.color');
const preto = document.getElementById('black');
const azul = document.getElementById('blue');
const vermelho = document.getElementById('red');
const verde = document.getElementById('green');
let corAtual = document.getElementsByClassName('color selected')[0];
corAtual = window.getComputedStyle(corAtual).backgroundColor;

let grid = document.querySelectorAll('.pixel')
let reset = document.getElementById('clear-board');


// Escutadores das cores selected
preto.addEventListener('mousedown', Selected)
azul.addEventListener('mousedown', Selected)
vermelho.addEventListener('mousedown', Selected)
verde.addEventListener('mousedown', Selected)

// Remove o selected da cor anterior e adiciona à cor clicada
function Selected() {
    for (let i = 0; i < cores.length; i++) {
        cores[i].classList.remove('selected')
    }
    event.target.classList.add('selected')
    corAtual = window.getComputedStyle(event.target).backgroundColor
}

// Escutadores do grid de pintura
document.body.addEventListener('click', gridClicavel => {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = corAtual
    }
})

reset.addEventListener('click', function () {
    for(let j = 0; j < grid.length; j++) {
        document.getElementsByClassName('pixel')[j].style.backgroundColor = '#ffffff'
    }
}
)