import geraSenha from './gerador';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracter = document.querySelector('.qtd-caracter');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkSimbolos = document.querySelector('.chk-simbolos');
const chkNumeros = document.querySelector('.chk-numero');
const enviarSenha = document.querySelector('.enviar-senha');

export default () =>{
    enviarSenha.addEventListener('click', () =>{
        senhaGerada.innerHTML = gera();
    }) 
};

function gera() {
    const senha = geraSenha(
        qtdCaracter.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Por favor, selecione pelo menos uma das opções.';
}