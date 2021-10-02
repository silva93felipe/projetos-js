let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let resultado = document.querySelector('div#resultado');
let valores = [];

function entreNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar() {
    if(entreNum(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
            
    }else{
        alert('Valor inválido ou já encontra-se na lista')
    }
    num.value = ''
    num.focus();
}

function finalizar() {
    if(valores.length == 0 ){
        alert("Adione itens para continuar.")
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informa foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informa foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores foi de  ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores foi de  ${media}</p>`
    }
    
}