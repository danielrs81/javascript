function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioano.value.length == 0 || Number(formularioano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formulariosex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formulariosex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4){
                // bebe
                img.setAttribute('src', './imagens/bebe_menino.jpg')
            } else if (idade < 10) {
                //crianca
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        
        } else if (formulariosex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 4){
                // bebe
            } else if (idade < 10) {
                //crianca
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}