const currentInput = document.getElementById('input')
const body = document.querySelector('body');
const lista = []
const listaConvertida = []
let ul = document.createElement('ul')
const div = document.createElement('div')
body.appendChild(div)
div.appendChild(ul)

adicionar = function(){
    lista.push(//{
        currentInput.value,
    ) 
    const li = document.createElement('li')
    ul.appendChild(li)
    li.appendChild(document.createTextNode(currentInput.value))
}

verificar = function(){
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    lista.forEach(function(valorNota){
        if (valorNota >= 90){
            listaConvertida.push('A')
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('A'))
            ul.appendChild(li)
          } else if (valorNota < 90 && valorNota >= 80){
            listaConvertida.push('B')
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('B'))
            ul.appendChild(li)
          } else if (valorNota < 80 && valorNota >=70){
            listaConvertida.push('C')
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('C'))
            ul.appendChild(li)
          } else if (valorNota < 70 && valorNota >= 60){
            listaConvertida.push('D')
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('D'))
            ul.appendChild(li)
          } else {
            listaConvertida.push('F')
            const li = document.createElement('li')
            li.appendChild(document.createTextNode('F'))
            ul.appendChild(li)
          }
    }
    )
}