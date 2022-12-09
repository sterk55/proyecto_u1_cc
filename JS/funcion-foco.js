function encenderApagarFoco(){
var displayFocoPrendido = document.getElementById('idPrendido').style.display;
var displayFocoApagado = document.getElementById('idApagado').style.display;
var textoBoton = document.getElementById('idBoton').innerHTML;

if(displayFocoApagado == 'block'){
    displayFocoApagado = 'none'
    displayFocoPrendido = 'block'
    textoBoton = 'Apagar'

}else{
    displayFocoApagado = 'block'
    displayFocoPrendido = 'none'
    textoBoton = 'Encender'
}

document.getElementById('idApagado').style.display = displayFocoApagado;
document.getElementById('idPrendido').style.display = displayFocoPrendido; 
document.getElementById('idBoton').innerHTML = textoBoton;


}