var cifrauno;
var cifrados;
var accion;


function init() {
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var reset = document.getElementById('reset');
    var resultado = document.getElementById('resultado');

    uno.onclick = function (e) {
        resultado.innerText = resultado.innerText + '1';
    }

    dos.onclick = function (e) {
        resultado.innerText = resultado.innerText + '2';
    }

    tres.onclick = function (e) {
        resultado.innerText = resultado.innerText + '3';
    }

    cuatro.onclick = function (e) {
        resultado.innerText = resultado.innerText + '4';
    }

    cinco.onclick = function (e) {
        resultado.innerText = resultado.innerText + '5';
    }

    seis.onclick = function (e) {
        resultado.innerText = resultado.innerText + '6';
    }

    siete.onclick = function (e) {
        resultado.innerText = resultado.innerText + '7';
    }

    ocho.onclick = function (e) {
        resultado.innerText = resultado.innerText + '8';
    }

    nueve.onclick = function (e) {
        resultado.innerText = resultado.innerText + '9';
    }

    cero.onclick = function (e) {
        resultado.innerText = resultado.innerText + '0';
    }

    reset.onclick = function (e) {
        resetear();
    }

    suma.onclick = function (e) {
        cifrauno = resultado.innerText;
        accion = "+";
        limpiar();
    }

    resta.onclick = function (e) {
        cifrauno = resultado.innerText;
        accion = "-";
        limpiar();
    }

    multiplicacion.onclick = function (e) {
        cifrauno = resultado.innerText;
        accion = "*";
        limpiar();
    }

    division.onclick = function (e) {
        cifrauno = resultado.innerText;
        accion = "/";
        limpiar();
    }

    igual.onclick = function (e) {
        cifrados = resultado.innerText;
        resolver();
    }

}

function limpiar() {
    resultado.innerText = ""
}

function resetear() {
    resultado.innerText = "";
    cifrauno = 0;
    cifrados = 0;
    accion = "";
}

function resolver() {
    var res = 0;
    switch (accion) {
        case "+":
            res = parseFloat(cifrauno) + parseFloat(cifrados);
            break;
        case "-":
            res = parseFloat(cifrauno) - parseFloat(cifrados);
            break;
        case "*":
            res = parseFloat(cifrauno) * parseFloat(cifrados);
            break;
        case "/":
            res = parseFloat(cifrauno) / parseFloat(cifrados);
            break;
    }
    resetear();
    resultado.innerText = res;
}