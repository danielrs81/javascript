function verificar() {
    let anoNascimento = Number(window.document.getElementById('iano').value)
    let res = window.document.getElementById('res')
    let data = new Date()
    let atual = data.getFullYear()
    //res.innerHTML = `${atual}`
    let idade = atual - anoNascimento
    //res.innerHTML = `${idade}`
    let formuSexo = window.document.getElementsByName('sexo')
    let genero = ''
    if (formuSexo[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade < 4) {
            res.innerHTML = `Você é um bebê do sexo masculino com ${idade} anos de idade`
        } else if (idade < 10) {
            res.innerHTML = `Você é uma criança do sexo masculino com ${idade} anos de idade`
        } else if (idade < 18) {
            res.innerHTML = `Você é um jovem do sexo masculino com ${idade} anos de idade`
        } else if (idade < 45) {
            res.innerHTML = `Você é um adulto do sexo masculino com ${idade} anos de idade`
        } else {
            res.innerHTML = `Você é um idoso do sexo masculino com ${idade} anos de idade`
        }
    }

    if (formuSexo[1].checked) {
        genero = 'Feminino'
        if (idade >= 0 && idade < 4) {
            res.innerHTML = `Você é um bebê do sexo feminino com ${idade} anos de idade`
        } else if (idade < 10) {
            res.innerHTML = `Você é uma criança do sexo feminino com ${idade} anos de idade`
        } else if (idade < 18) {
            res.innerHTML = `Você é um jovem do sexo feminino com ${idade} anos de idade`
        } else if (idade < 45) {
            res.innerHTML = `Você é um adulto do sexo feminino com ${idade} anos de idade`
        } else {
            res.innerHTML = `Você é um idoso do sexo feminino com ${idade} anos de idade`
        }
    }

    //res.innerHTML += genero
   
    
}