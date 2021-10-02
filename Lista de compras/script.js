const entrada = document.querySelector('.entrada')
const adicionaItem = document.querySelector('.adiciona-item')
const tarefas = document.querySelector('.tarefas')


function criaLi() {
    const li = document.createElement('li');
    return li;   
}

entrada.addEventListener('keypress', function (e) {
    if (e.keyCode === 13){
        if (!entrada.value) return;
        criaTarefa(entrada.value)
    }
});

function limpaEntrada() {
    entrada.value = '';
    entrada.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apaga tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoEntrada) {
    const li = criaLi();
    li.innerHTML = textoEntrada;
    tarefas.appendChild(li);
    limpaEntrada();
    criaBotaoApagar(li);
    salvaTarefas()
}

adicionaItem.addEventListener('click', function() {
    if (!entrada.value) return;
    criaTarefa(entrada.value)
    
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefas();
    }
})

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
