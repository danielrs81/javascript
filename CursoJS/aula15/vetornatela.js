let valores = [8,1,7,4,2,9]

console.log(valores)
num.indexOf(7)

/*
for(pos = 0; pos < valores.length;pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

*/

// para cada posição na variavel composta, mostre o num pos

for(let pos in valores) { 
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

