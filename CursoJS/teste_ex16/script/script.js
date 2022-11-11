function contar() {
    let ini = Number(document.getElementById('ii').value)
    let fim = Number(document.getElementById('if').value)
    let passo = Number(document.getElementById('ip').value)
    let res = document.getElementById('res')

    if (ini == 0 || fim == 0 || passo == 0) {
        res.innerHTML = 'ERRO - Digite um número válido'
    } else {
        res.innerHTML = 'Contando ......'
        
        for (c = ini; c <= fim; c += passo) {
            res.innerHTML += `${c} &#x27A1`
        }
        for (c = ini; c >= fim; c -= passo) {
            res.innerHTML += `${c} &#x27A1`
        } 
        
        res.innerHTML += ' &#x2B50'
    }

}