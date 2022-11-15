function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
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
                img.setAttribute("src", "./imagens/bebe_h.png")
            } else if (idade < 10) {
                //crianca
                img.setAttribute("src", "./imagens/crianca_h.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "./imagens/jovem_h.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "./imagens/adulto_h.png")
            } else {
                // Idoso
                img.setAttribute("src", "./imagens/idoso_h.png")
            }
        
        } else if (formulariosex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 4){
                // bebe
                img.setAttribute("src", "./imagens/bebe_m.png")
            } else if (idade < 10) {
                //crianca
                img.setAttribute("src", "./imagens/crianca_m.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "./imagens/jovem_m.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "./imagens/adulto_m.png")
            } else {
                // Idoso
                img.setAttribute("src", "./imagens/idoso_m.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}