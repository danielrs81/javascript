function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    var img = window.document.querySelector('img#imagem')

    if (formularioano.value.length == 0 || formularioano.value > ano) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'
    } else {
        var formuescolha = document.getElementsByName('opcao')
        var tempo = ano - Number(formularioano.value)
        var timecity = ''

        if (formuescolha[0].checked) {
            timecity = 'do Santos FC'
            if(formularioano.value >= 1960 && formularioano.value < 1970) {
                img.src = './imagens/santos_60_t.jpeg'
            } else if (formularioano.value < 1980) {
                img.src = './imagens/santos_70_t.jpg'
            } else if (formularioano.value < 1990) {
                img.src = './imagens/santos_80_t.jpg'
            } else if (formularioano.value < 2000) {
                img.src = './imagens/santos_90_t.jpg'
            } else {
                img.src = './imagens/santos_2000_t.jpg'
            }

        } else if (formuescolha[1].checked) {
            timecity = 'da cidade de Santos'
            if(formularioano.value >= 1960 && formularioano.value < 1970) {
                img.src = './imagens/santos_60_c.jpg'
            } else if (formularioano.value < 1980) {
                img.src = './imagens/santos_70_c.jpg'
            } else if (formularioano.value < 1990) {
                img.src = './imagens/santos_80_c.jpg'
            } else if (formularioano.value < 2000) {
                img.src = './imagens/santos_90_c.jpg'
            } else {
                img.src = './imagens/santos_2000_c.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos a escolha ${timecity} a ${tempo} anos atrás, no ano de ${formularioano.value}.`
      
    }


}

