function contar() {
    var valor = document.querySelector('.numero');
    var resultado = document.querySelector('#seltab')

    if (valor.value.length == 0){
        alert('Preencha o campo')
        resultado.innerHTML = '';
    }else{
        let numero = Number(valor.value);
        resultado.innerHTML = `Tabuada de ${numero}`
        for (c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${c} X ${numero} = ${c*numero}`
            resultado.appendChild(item);
        }
    }
} 
