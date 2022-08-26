const modalWrapper = document.querySelector('.modal-wrapper')
press = function() {
    modalWrapper
        .classList
        .remove('invisible')
}

esc = function(event){
    const isEscKey = event.key === 'Escape'
    if(isEscKey) {
        modalWrapper
            .classList
            .add('invisible')
    }
}

document.addEventListener('keydown', esc)
/*
const buttonOpenmodal = document.getElementById('openModal')

const modalWrapper= document.querySelector('.modal-wrapper')

buttonOpenmodal.onclick = function(){
    modalWrapper
        .classList
        .remove('invisible')
        
}
*/