function Contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert('[ERRO] Falta dados!')
    } else{
        res.innerHTML = 'Contando <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p =Number(passo.value)
        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
        }
        if(i<f){
             for(let c= i; c<= f; c += p){
            res.innerHTML += ` ${c} 👉`  
              
        }
   
        } else {
            for( let c = i; c>=f; c-= p){
            res.innerHTML += ` ${c} 👉`
            }
            }res.innerHTML += '🏳️'
        }
     
    }
