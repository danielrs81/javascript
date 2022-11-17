/*
let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inLista(n, 1) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo Ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

}
*/

function adicionar() {
    let num = Number(window.document.getElementById('fnum').value)
    let lista = window.document.getElementById('flista')
    let res = window.document.getElementById('res')
    let valores = []

    if (num == 0 || num > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
         //valores = document.createElement('opcao')
         //item.push(num)

         let item = document.createElement('option')
         item.value = num
         //tab.appendChild(item)
         item.push(num)
       
    }
    res.innerHTML = `Valores ${item}`
}

