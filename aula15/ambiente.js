let num = [5, 8, 2, 9, 3]
num[5] = 6 // acrecenta um número na quinta posição
num.push(7) // acrecenta o valor 10 na última posição
// num.sort() // organiza em forma crescente
console.log(`O primeiro valor do vetor é ${num[0]}`) // o vetor se inicia em 0
console.log(`O vetor tem ${num.length} posiçôes`) // mostra quantas possições tem o vetor
console.log(`Nosso vetor é o ${num}`) // mostrar todos os valores dentro do vetor

let pos = num.indexOf(1) // ele vai mostrar a posição que o valor selecionado estar 
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
