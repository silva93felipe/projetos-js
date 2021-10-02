function inicia() {
    var resultado = document.querySelector('.idade');
    var genero = '';
    calculaIdade();
    
    function calculaIdade() {
        var nascimento = document.querySelector("#nascimento");
        var anoAtual = new Date().getFullYear();
        
        if (nascimento.value == 0 || Number(nascimento.value) > anoAtual){
            alert('Ano de nascimento inválido.')
        } else{
            var idadeAtual = anoAtual - Number(nascimento.value);
            verificaSexo(idadeAtual)
        }
    }
    
    function verificaSexo(idade) {
        var sexo = document.getElementsByName('radsex');
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
       
        resultado.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        resultado.appendChild(img);
        
        if (sexo[0].checked){
            genero = 'Homem';

            if (idade < 12) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpg')
            } else{
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher';

            if (idade < 12) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpg')
            } else{
                img.setAttribute('src', 'idosa.jpg')
            }
        } 
        
    }       
}