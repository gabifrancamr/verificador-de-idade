function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('textano');
    let res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade>12 && idade <21){
                //jovem
                img.setAttribute('src', 'rapaz.jpg')
            } else if (idade > 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade>12 && idade <21){
                //jovem
                img.setAttribute('src', 'moca.jpg')
            } else if (idade > 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}