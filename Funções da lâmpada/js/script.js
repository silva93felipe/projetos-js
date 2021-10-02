const eventoBotao = document.querySelector('#evento-botao');
// const desligar = document.querySelector('#desligar');
const lamp = document.querySelector('#lamp');

function verificaQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1;    
}

function eventoLigDesl() {
    if (eventoBotao.textContent == 'Ligar'){
        ligaLampada();
        eventoBotao.textContent = 'Desligar';
    } else{
        desligaLampada();
        eventoBotao.textContent = 'Ligar';
    }
}

function ligaLampada() {
    if (!verificaQuebrada()){
        lamp.src = './img/ligada.jpg';
    }
}

function desligaLampada() {
    if (!verificaQuebrada()){
        lamp.src = './img/desligada.jpg';
    }
}

function quebraLampada() {
    if (!verificaQuebrada()){
        lamp.src = './img/quebrada.jpg';
    }    
}

eventoBotao.addEventListener('click', eventoLigDesl);
lamp.addEventListener('mouseover', eventoLigDesl);
lamp.addEventListener('mouseleave', eventoLigDesl);
lamp.addEventListener('dblclick', quebraLampada);