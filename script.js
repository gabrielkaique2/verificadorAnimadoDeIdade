function verificador(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('res')

    return resultado.innerHTML = `Sua idade é ${fano.value}`

}

