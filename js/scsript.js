function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade>=0 && idade < 10){
               //criança
               img.setAttribute('src', 'img/menino.png')
           }else if(idade<15){
               //adolescente
               img.setAttribute('src', 'img/adolescente-menino.png')
           }else if(idade<20){
               //jovem
               img.setAttribute('src', 'img/jovem-homem.png')
           }else if(idade<50){
               //adulto
               img.setAttribute('src', 'img/homem.png')
           }else{
               //idoso
               img.setAttribute('src', 'img/idoso.png')
           }
       }else{
           genero = 'Mulher'
           if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menina.png')
            }else if(idade<15){
                //adolescente
                img.setAttribute('src', 'img/adolescente-mulher.png')
            }else if(idade<20){
                //jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${genero} com ${idade} anos.<br/>`
       res.appendChild(img)
    }
}