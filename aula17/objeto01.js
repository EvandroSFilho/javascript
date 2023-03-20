let amigo = {               // declaramos o objeto
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){ // se não passar nenhum valor ele vai ser 0
        console.log('Engordou')
        this.peso += p
    }} 
    amigo.engordar(2) // acrescentando 2 quilos em peso
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`) // buscou o nome e o peso de amigo