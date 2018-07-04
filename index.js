const numero1 = document.querySelector("#number1");
const numero2 = document.querySelector("#number2");
const numero3 = document.querySelector("#number3");
const numero4 = document.querySelector("#number4");
function executarSoma() {
    executaOperacao(number1, number2, "#resultado", "soma");
}
function executarSub() {
    executaOperacao(number1, number2, "#resultado", "sub");
}
function executarDivisao() {
    executaOperacao(number1, number2, "#resultado", "divisao");
}
function executarMultiplicacao() {
    executaOperacao(number1, number2, "#resultado", "multiplicacao");
}
function executaOperacao(num1, num2, idResultado, tipoOperacao) {
    let resultado;
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    num3 = parseInt(num3.value);
    num4 = parseInt(num4.value);
    if (tipoOperacao === "soma") {
        resultado = num1 + num2;
    }
    if (tipoOperacao === "sub") {
        resultado = num1 + num2;
    }
    if (tipoOperacao === "divisao") {
        resultado = num1 + num2;
    }
    if (tipoOperacao === "multiplicacao") {
        resultado = num1 + num2;
    }

    document.querySelector(idResultado).innerText = resultado;
}
function mudaEtadoBtao(isDisabled, idBotao) {
    const botao = document.querySelector(idBotao);
    botao.disabled = isDisabled;
} 
function decideEstadoBotao() {
    if (numero1.value !== " " && numero2.value !== " ") 
    if (numero3.value !== " " && numero4.value !== " ")
    if (numero5.value !== " " && numero6.value !== " ")
    if (numero7.value !== " " && numero8.value !== " ")
    {
        habilitaSomaBtn(false, "#botao-soma");
    }
    else {
        desabilitaSomaBtn(true, "#botao-soma");
    }
}

function zerarResultado() {
    document.querySelector("#resultado-soma") .innerText = " ";
}
document.querySelector("#botao-soma").onclick = executarSoma;
document.querySelector("#botao-sub").onclick = executarSub;
document.querySelector("#botao-divisao").onclick = executarDivisao;
document.querySelector("#botao-Multiplicacao").onclick = executarMultiplicacao;

//soma bindings
numero1.onkeyup = decideEstadoBotao;
numero2.onkeyup = decideEstadoBotao;
numero3.onkeyup = decideEstadoBotao;
numero4.onkeyup = decideEstadoBotao;


numero1.onfocus = zerarResultado;
numero2.onfocus = zerarResultado;
numero3.onfocus = zerarResultado;
numero4.onfocus = zerarResultado;