'use strict'

let modalHidden = document.querySelector('.modalHidden');
let closeModal = document.querySelector('.closeModal');
let overlayHidden = document.querySelector('.overlayHidden');
let showModal = document.querySelectorAll('.showModal');
console.log(showModal)
for(let i = 0; i < showModal.length; i++){
    (showModal[i].addEventListener('click',function () {
        if (showModal[i].innerHTML == 'Show modal 2') {
           modalHidden.style.position = 'relative'
           modalHidden.style.left = '40%'
        }
        if (showModal[i].innerHTML == 'Show modal 3') {
            modalHidden.style.position = 'relative'
            modalHidden.style.left = '70%'
         }
        modalHidden.classList.remove('modalHidden');
        overlayHidden.classList.remove('overlayHidden')
    }))
}
document.querySelector('.modalHidden').addEventListener('click',function () {
    modalHidden.style.display = 'none'
    modalHidden.style.visibility = 'hidden'
})
document.querySelector('.overlayHidden').addEventListener('click',function () {
    modalHidden.style.display = 'none'
    
})

document.addEventListener('keydown',function () {
    modalHidden.style.display = 'none'
 
})

