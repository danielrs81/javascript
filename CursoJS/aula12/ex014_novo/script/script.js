function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let hora = new Date()
    let agora = hora.getHours()
    msg.innerHTML = `Agora são ${agora} horas.`

    if(agora >= 0 && agora < 12) {
        img.src = './imagens/manha.png'
        document.body.style.background = '#43314c'
    } else if (agora >= 12 && agora < 18) {
        img.src = './imagens/tarde.png'
        document.body.style.background = '#43314c'
    } else {
        img.src = './imagens/noite.png'
        document.body.style.background = '#43314c'
    }
}