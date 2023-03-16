/*function soma(n1, n2). se no parâmetro não passarmos os valores de n1 ou n2 ele retornarar como erro mas se
definirmos um parâmetro ele automaticamento colocara o valor definido, igual o exemplo a baixo.*/
function soma(n1=0, n2=0){ //Definição de parâmetro (n1=0, n2=0)
    return n1 + n2
}
console.log(soma(2, 8))// sem mandar os dois valores -> (soma(2))

