function verificador(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 12){      //Identifica a idade de uma criança até 12 anos

                img.setAttribute('src', 'foto-bebe-m.png')

            }else if (idade >= 12 && idade < 18){       //Identifica a idade de um jovem 

                img.setAttribute('src', 'foto-jovem-m.png')

            }else if (idade >= 18 && idade < 55){       //Identifica a idade de um adutlo

                img.setAttribute('src', 'foto-adulto-m.png')

            }else{      //Identifica a idade de um idoso

                img.setAttribute('src', 'foto-idoso-m.png')

            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){      //Identifica a idade de uma criança até 12 anos

                img.setAttribute('src', 'foto-bebe-f.png')

            }else if (idade >= 12 && idade < 18){       //Identifica a idade de um jovem 

                img.setAttribute('src', 'foto-jovem-f.png')

            }else if (idade >= 18 && idade < 55){       //Identifica a idade de um adutlo

                img.setAttribute('src', 'foto-adulto-f.png')

            }else{      //Identifica a idade de um idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

