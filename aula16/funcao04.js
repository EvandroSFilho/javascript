function fatorial(n){ // definimos o parâmetro  N
    let fat = 1       // Criamos uma variavel iniciando em 1
    for(let c = n; c > 1; c--){
        fat *= c // aqui está simplificado é a mesma coisa que " fat = fat * c "
    }
    return fat // A cada passada do for o fat vai receber o valor de mesmo vezes o valor de C
}
console.log(fatorial(5)) // valor de N

// 5! = 5 x 4 x 3 x 2 x 1 = 120 o fatorial de 5 é 120