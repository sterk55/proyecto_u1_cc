var valorDisplayTable1 = document.getElementById('idPrimeraTabla').style.display;
var valorDisplayTable2 = document.getElementById('idSegundaTabla').style.display;
var textoPrimerDigito = document.getElementById('idPrimerDigito').innerHTML;
var textoSegundoDigito = document.getElementById('idSegundoDigito').innerHTML;
var textoOperacion = document.getElementById('idOperacion').innerHTML;
var textoResul = document.getElementById('resul').innerHTML;


function dividir(){
    valorDisplayTable1 = 'none';
    valorDisplayTable2 = 'block'
    
    document.getElementById('idPrimeraTabla').style.display = valorDisplayTable1;
    document.getElementById('idSegundaTabla').style.display = valorDisplayTable2;
}

function sumar(){

    valorDisplayTable1 = 'none';
    valorDisplayTable2 = 'block'
    
    document.getElementById('idPrimeraTabla').style.display = valorDisplayTable1;
    document.getElementById('idSegundaTabla').style.display = valorDisplayTable2;
}

function restar(){
    valorDisplayTable1 = 'none';
    valorDisplayTable2 = 'block'
    
    document.getElementById('idPrimeraTabla').style.display = valorDisplayTable1;
    document.getElementById('idSegundaTabla').style.display = valorDisplayTable2;
}

function multiplicar(){
    valorDisplayTable1 = 'none';
    valorDisplayTable2 = 'block'
    
    document.getElementById('idPrimeraTabla').style.display = valorDisplayTable1;
    document.getElementById('idSegundaTabla').style.display = valorDisplayTable2;
}

function total(){
    var textoOperacion = document.getElementById('idOperacion').innerHTML;
    var textoResul = document.getElementById('resul').innerHTML;
    var textoPrimerDigito = document.getElementById('idPrimerDigito').innerHTML;
    var textoSegundoDigito = document.getElementById('idSegundoDigito').innerHTML;

    if(textoOperacion == '+'){
        textoResul = parseInt(textoPrimerDigito) + parseInt(textoSegundoDigito)
        console.log("suma")
    }else if(textoOperacion == '-'){
        textoResul = parseInt(textoPrimerDigito) - parseInt(textoSegundoDigito) 
    }else if(textoOperacion == '*'){
        textoResul = parseInt(textoPrimerDigito) * parseInt(textoSegundoDigito) 
    }else if(textoOperacion == '/'){
        textoResul = parseInt(textoPrimerDigito) / parseInt(textoSegundoDigito) 
    }

    document.getElementById('idOperacion').innerHTML = textoOperacion
    document.getElementById('resul').innerHTML = textoResul
}