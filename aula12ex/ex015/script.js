function verificar() {
   var date = new Date()
   var ano = date.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
            if (idade >=0 && idade < 20) {
               // criança
               img.setAttribute('src', 'fotobbhomem.png')         
            }else if (idade < 21){
              // jovem
              img.setAttribute('src', 'fotojovhomem.png') 
            }else if(idade < 50){
              // adulto
              img.setAttribute('src', 'fotoadultohomem.png') 
            }else{
              // idoso
              img.setAttribute('src', 'fotoidosohomem.png') 
        }
    }else if (fsex[1].checked){
       gênero = 'Mulher'
        if (idade >=0 && idade < 20) {
               // criança
               img.setAttribute('src', 'fotobbmulher.png')   
        }else if (idade < 21){
              // jovem
              img.setAttribute('src', 'fotojovmulher.png') 
        }else if(idade < 50){
              // adulto
               img.setAttribute('src', 'fotoadultomulher.png') 
        }else{
              // idoso
              img.setAttribute('src', 'fotoidosomulher.png') 
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com <mark>${idade}</mark> anos.`
       res.appendChild(img)
   }
}