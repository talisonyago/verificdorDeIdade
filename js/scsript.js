function contar(){
    var numInicial = document.getElementById('numeroInicial')
    var numLimite = document.getElementById('numeroLimite')
    var multi = document.getElementById('multiplicador')
    var res = document.getElementById('res')

    if(numInicial.value.length == 0 || numLimite.value.length == 0 || multi.value.length == 0 ){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Preencha todos os dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(numInicial.value)
        let digito = Number(multi.value)
        let limite = Number(numLimite.value)
        if(digito <=0){
            window.alert('Passo inválido! Considerando passo 1!')
            digito = 1
        } else if(numInicial.value.length < numLimite.value.length){
            
            for(let c = inicio; c<=limite; c += digito){
                res.innerHTML += `${c} \u{1F449}`   
            }

        } else{
            for(let c = inicio; c >= limite; c-= digito){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1f3c1}`
        
    }
    
}