function Contar(){
    var i = document.getElementById('inicio')
    var ini = Number(i.value)
    var fi = document.getElementById('fim')
    var fim = Number(fi.value)
    var p = document.getElementById('passo')
    var passo = Number(p.value)
    var resultado = document.getElementById('resultado')
if( ini == 0 || fim == 0){
    alert('Não é possível!')
}
    if(ini< fim){
    for (let j = ini; j <= fim; j += passo){
resultado.innerHTML += ` ${j} 👉`
    }
    // Exibe o resultado
}else{
    for(let j = ini; j>= fim; j-= passo){
        resultado.innerHTML += ` ${j} 👉`}
}resultado.innerHTML += '🏳️' 
}