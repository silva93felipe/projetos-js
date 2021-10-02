// Função de obter dados do formulário

function formulario() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // Seleciona as entradas para obter o valor e guardar no objeto
    function recebeEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }); 

        console.log(pessoas);

        // Mostra na tela os valores obtidos
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`
    }

    form.addEventListener('submit', recebeEvento)
}

formulario()