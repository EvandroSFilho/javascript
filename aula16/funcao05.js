// RECURSIVIDADE
function fatorial(n){
    if(m == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
oque fizemos aqui em cima foi basicamento fazer o fatoria criar um chamdo para ele mesmo
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!
1! = 1


*/