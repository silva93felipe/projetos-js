function contar() {
    var inicio = document.querySelector('.inicio');
    var fim = document.querySelector('.fim');
    var passo =document.querySelector('.passo');
    let resultado = document.querySelector('.resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert('Campos faltantes');
        resultado.innerHTML = '';

    } else{
        resultado.innerHTML = 'Contando... <br/>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if( p <= 0){
            alert('Passo inválido. Valor assumido vai ser o 1')
            p = 1
        }

        // contagem crescente
        if(i < f){
            for (var c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        // contagem decrescente
        }else{
            for (var c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
} 
