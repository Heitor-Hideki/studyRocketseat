//  Eventos
/*
function print() {
    console.log('fui clicado')
}
*/
/*
const input = document.querySelector('input')
input.onkeyup = function() {
    console.log(':o')
}
*/
 
/*
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print() {
    console.log(h1)
}
*/

const input = document.querySelector('input')
input.onkeydown = function(event){
    console.log(event.currentTarget.value)
}