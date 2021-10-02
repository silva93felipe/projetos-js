const calcular = document.querySelector('#calcular');

function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;    
    const resultado = document.querySelector('#resultado');    

    if (nome !== '' && altura !== '' && peso !== ''){
        resultadoImc = calculaImc(altura, peso)
        if ( resultadoImc < 18.5){
            resultado.textContent = `${nome} seu IMC é de ${resultadoImc} e você está ABAIXO DO PESO.`
        } else if ( resultadoImc < 24.9){
            resultado.textContent = `${nome} seu IMC é de ${resultadoImc} e você está com PESO NORMAL`
        } else if ( resultadoImc < 29.9){
            resultado.textContent = `${nome} seu IMC é de ${resultadoImc} e você está com SOBREPESO`
        } else if ( resultadoImc < 39.9 ){
            resultado.textContent = `${nome} seu IMC é de ${resultadoImc} e você está com OBESIDADE`
        } else {
            resultado.textContent = `${nome} seu IMC é de ${resultadoImc} e você está com OBESIDADE GRAVE`
        }
    }else{
        resultado.textContent = 'Preencha todos os campos.'
    }
}

function calculaImc(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

calcular.addEventListener('click', imc);