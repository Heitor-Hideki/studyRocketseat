
// CREATE
const currentInput = document.getElementById('input')
const body = document.querySelector('body');
const lista = []
let ul = document.createElement('ul')
const div = document.createElement('div')
body.appendChild(div)
div.appendChild(ul)


 adicionar = function(){
    lista.push(//{
        currentInput.value,
    //     id: lista.length + 1,
    // }
    ) 
    // lista.forEach(function(){
    //     const li = document.createElement('li');
    //     li.innerHTML = (lista[lista.lenght - 1]);
    //     ul.appendChild(li);
    // }
    // )
    const li = document.createElement('li')
    ul.appendChild(li);
    // li.innerHTML = currentInput.value
    li.appendChild(document.createTextNode(currentInput.value))

    const buttonOne = document.createElement('button')
    buttonOne.innerHTML = "Editar"
    buttonOne.setAttribute('id', `${lista.length}`)
    li.appendChild(buttonOne)
    // li.insertAdjacentElement("afterend", buttonOne)
    buttonOne.addEventListener('click', (event) => editar(event))

    const buttonTwo = document.createElement('button')
    buttonTwo.innerHTML = "Deletar"
    buttonTwo.setAttribute('id', `${lista.length}`)
    li.appendChild(buttonTwo)
    // li.insertAdjacentElement("afterend", buttonTwo)
    buttonTwo.addEventListener('click', (event) => deletar(event))

    // buttonOne.onclick(editar())
    // buttonTwo.onclick(deletar())
    // falta: adicionar junto dois botõtes com funções de editar e deletar e criar as funçoes de edit e delete
 }

//READ
read = function(){
    return lista
}

//UPADTE 
editar = function(event){
     // precisa localizar o elemento e editar
//     console.log(event.target.id)
    const toEdit = event.target.id
    const newInput =  document.createElement('input')

    event.target.parentNode.append(newInput)
    newInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            const newInputValue = newInput.value
            // console.log(lista[toEdit - 1])
            lista.splice(toEdit - 1, 1)
            lista.push(newInputValue)
            while (ul.firstChild){
                ul.removeChild(ul.firstChild)
            }
        
            lista.forEach(function(task, id){
                    let index = id + 1
                    const li = document.createElement('li')
                    li.appendChild(document.createTextNode(task))
                    
                    const buttonOne = document.createElement('button')
                    buttonOne.innerHTML = "Editar"
                    buttonOne.setAttribute('id', `${index}`)
                    li.appendChild(buttonOne)
                    // li.insertAdjacentElement("afterend", buttonOne)
                    buttonOne.addEventListener('click', (event) => editar(event))
                    
                    const buttonTwo = document.createElement('button')
                    buttonTwo.innerHTML = "Deletar"
                    buttonTwo.setAttribute('id', `${index}`)
                    li.appendChild(buttonTwo)
                    // li.insertAdjacentElement("afterend", buttonTwo)
                    buttonTwo.addEventListener('click', (event) => deletar(event))
                    ul.appendChild(li)
            }
            )
        }
    })
  }
// DELETE
deletar = function(event){
    // precisa: identirficar qual é o elemento a deletar
    // console.log(event.target.id)
    const toDelete = event.target.id
    lista.splice(toDelete - 1, 1)
    // console.log(event.target.id)
    // const paiUl = document.querySelector('div')
    // paiUl.removeChild(ul)
    // const novaUl = document.createElement('ul')
    // div.appendChild(novaUl)
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }

    lista.forEach(function(task, id){
            let index = id + 1
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(task))
            
            const buttonOne = document.createElement('button')
            buttonOne.innerHTML = "Editar"
            buttonOne.setAttribute('id', `${index}`)
            li.appendChild(buttonOne)
            // li.insertAdjacentElement("afterend", buttonOne)
            buttonOne.addEventListener('click', (event) => editar(event))
            
            const buttonTwo = document.createElement('button')
            buttonTwo.innerHTML = "Deletar"
            buttonTwo.setAttribute('id', `${index}`)
            li.appendChild(buttonTwo)
            // li.insertAdjacentElement("afterend", buttonTwo)
            buttonTwo.addEventListener('click', (event) => deletar(event))
            ul.appendChild(li)
    }
    )
}

