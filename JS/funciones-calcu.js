var valorDisplayTable1 = document.getElementById('idPrimeraTabla').style.display;
var valorDisplayTable2 = document.getElementById('idSegundaTabla').style.display;
var cursorValidoSumar = document.getElementById('idBotonSumar').style.cursor;
var cursorValidoDividir = document.getElementById('idBotonDividir').style.cursor;
var cursorValidoRestar = document.getElementById('idBotonRestar').style.cursor;
var cursorValidoMultiplicar = document.getElementById('idBotonMultiplicar').style.cursor;


function dividir(num1, num2){
    valorDisplayTable1 = 'none';
    valorDisplayTable2 = 'block'
    return num1/num2
    
}

function sumar(num1, num2){

    return num1+num2
}

function restar(num1, num2){
    return num1-num2
}

function multiplicar(num1, num2){
    return num1*num2
}