var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch (diaSem) {
    case 1:
        console.log('Domingo')
        break;
    case 2:
        console.log('Segunda')
        break;
    case 3:
        console.log('Terça')
        break; 
    case 4:
        console.log('Quarta')
        break;
    case 5:
        console.log('Quinta')
        break;  
    case 6:
        console.log('Sexta')
        break;
    case 7:
        console.log('Sabado')
        break;
    default:
        console.log('[ERRO] Dia da semana não encontrado!')
        break;
}