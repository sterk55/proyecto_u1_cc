function prueba(){
    //var y let son variables que se pueden cambiar
    //const son constantes que no se cambien
    let valorSrc = document.getElementById('idFoto').src
    console.log(valorSrc)


    if(valorSrc.includes('EC.jpg')){

    }

    let dias = ["Lunes", "Martes"]
    dias.push("Jueves")
    console.log(dias)
    const diasCompletos = ["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const [dia1, dia2, dia3, preferido, dia6, dia7] = diasCompletos
    console.log(preferido)
    

    const cristhian = {
        cedula : "1313684308",
        nombre : "Cristhian",
        apellido : "Cedeño",
        edad : 22,
        ciudad : "Manta",
        direccion:{
            calle: "America",
            referencia: "SeminarioMayor"
        },
        materia:{
            nombre: "PWEB",
            creditos: 6
        }
    }
    console.log(cristhian)

    //Desestructurar objeto

    const{cedula, ciudad} = cristhian
    console.log(cedula)
    console.log(ciudad)

    const{nombre} = cristhian.materia
    console.log(nombre)

    let val =  this.funcion2()
    console.log(val)


}

function funcion2(){
    console.log("Segunda funcion")
    return 'valor'
}