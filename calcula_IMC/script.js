const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const entradaPeso = document.querySelector("#peso");
    const entradaAltura = document.querySelector("#altura");

    const peso = Number(entradaPeso.value);
    const altura = Number(entradaAltura.value);

    if (!peso || !altura) {
        resultado.innerHTML = "Peso e/ou altura inválidos";
        return (resultado.style.backgroundColor = "orange");
    }

    const imc = calcImc(peso, altura);
    const nivelImc = nivelIMC(imc);
});

function nivelIMC(imc) {
    resultado.innerHTML = "";
    const p = criaPara();
    // const div = criaDiv();
    // const msg = `Seu IMC é: ${imc}`

    if (imc >= 39.9) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "red";
        p.innerHTML = "Obsidade grau 3";
        return resultado.appendChild(p);
    }
    if (imc >= 34.9) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "red";
        p.innerHTML = "Obsidade grau 2";
        return resultado.appendChild(p);
    }
    if (imc >= 29.9) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "red";
        p.innerHTML = "Obsidade grau 1";
        return resultado.appendChild(p);
    }
    if (imc >= 24.9) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "yellow";
        p.innerHTML = "Sobrepeso";
        return resultado.appendChild(p);
    }
    if (imc >= 18.5) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "green";
        p.innerHTML = "Peso Normal";
        return resultado.appendChild(p);
    }
    if (imc < 18.5) {
        resultado.style.backgroundColor = "cornsilk";
        p.style.backgroundColor = "yellow";
        p.innerHTML = "Abaixo do Peso";
        return resultado.appendChild(p);
    }
}

function calcImc(peso, altura) {
    const resultadoImc = peso / altura ** 2;
    return resultadoImc.toFixed(2);
}

function criaPara() {
    const p = document.createElement("p");
    return p;
}

// function criaDiv() {
//     const div = document.createElement("div");
//     return div;
// }
