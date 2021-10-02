const img =  document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;
let intervalId = null;

const trafficlight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () =>{
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':          () => img.src = './img/vermelho.png',
    'yellow':       () => img.src = './img/amarelo.png',
    'green':        () => img.src = './img/verde.png',
    'automatic':    () => intervalId = setInterval( changeColor, 2000)
};

buttons.addEventListener('click', trafficlight);