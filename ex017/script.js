function Tab(){
var valor = document.getElementById('valor')
var nwvalor = Number(valor.value)
var result = document.getElementById('res')
result.innerHTML = ''
for(let V = 1;V<=10; V++){//Lógica da Tabuada
    result.innerHTML += `${nwvalor} x ${V} =  ${nwvalor * V }<br>`
}

}