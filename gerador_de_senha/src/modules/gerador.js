const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbolo = () => String.fromCharCode(rand(33, 48))

export default function geraSenha(qtd, maiuscula, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++){
        maiuscula && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}


