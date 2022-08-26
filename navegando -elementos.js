/*
const box = document.querySelector("#boxOne")
box.style.color = '#f5f1d2'
console.log(box.style.color)
*/

//como estilizar os elementos do query selector - funciona como um css em linha
//const element = document.querySelector('body')
//element.style.backgroundColor = '#f9f3d2'
//console.log(element.style.backgroundColor)

//Navegando pelos elementos
// parentNode e parentElement

/*
const body = document.querySelector('body')
console.log(body.parentNode)
console.log(body.parentElement)

const bloco = document.querySelector('#boxOne')
console.log(bloco.parentNode) //serve para se localizar elementos dentro do código
*/

// childNodes e children
/*
const body = document.querySelector('body')
console.log(body.childNodes) //retorna uma nodelist
console.log(body.children)  //retorna um HTML collection
*/

// firstChild e firstElementChild
/*
const body = document.querySelector('body') 
console.log(body.firstChild) //considera o primeiro espaço vazio e retorna um #text
console.log(body.firstElementChild) //não considera o primeiuro espaço vazio e retorna o primeiro elemento
*/

//  lastChild e lastElementChild
/*
const body = document.querySelector('body')
console.log(body.lastChild)
console.log(body.lastElementChild)
*/

//  nextSibling e nextElementSibling
//  previousSibling e previousElementSibling 
