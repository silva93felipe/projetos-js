
var hora = document.querySelector('.hora');
var img = document.querySelector('#paisagem');
var saudacao = document.querySelector('.saudacao');

var horaAtual = new Date().getHours()

function mudaHorario() {
    hora.innerHTML = `Agora são ${horaAtual} horas`
    verificaHora(horaAtual);
}

function verificaHora(hora) {
    if(hora < 12){
        img.src ='manha.jpg'
        saudacao.innerHTML = 'Bom dia';
        document.body.style.background = 'yellow';
    } else if (hora < 18){
        img.src ='tarde.jpg'
        saudacao.innerHTML = 'Boa tarde';
        document.body.style.background = 'orange';
    }else{
        img.src ='noite.jpg'
        saudacao.innerHTML = 'Boa noite';
        document.body.style.background = 'blue';
    }
}

mudaHorario();