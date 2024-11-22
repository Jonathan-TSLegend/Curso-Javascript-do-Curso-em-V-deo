
function Verificar(){var pega = document.getElementById('idade')
    var I = Number(pega.value)
    var msg = document.getElementById('msg')
    var img = document.getElementById('Fotos')
        if(I < 11){
            msg.innerHTML = (`Você é uma criança de ${I} anos`)
           img.src = 'icon_criançaA.png'
           img.style.display = "block";
           document.body.style.background = 'rgb(206, 194, 29)'
            img.margin= "auto"
        }     
        else if (I < 18){
        msg.innerHTML = (`Você é um adolescente de ${I} anos`)
            img.src = 'icon_adolescenteC.png'
            img.style.display = "block"
            document.body.style.background = 'green'
    } else if(I < 59){
        msg.innerHTML = (`Você é um adulto de ${I} anos`)
        img.src = 'icon_adultoB.png'
        img.style.display = "block";
        document.body.style.background ='purple'
    }
    else{
    msg.innerHTML = (`Você é um idoso de ${I} anos`)
    img.src = 'icon_idosoD.png'
    img.style.display = "block"
    document.body.style.background = 'blue'
    }
    }