//Select element function
const selectElement = function(element){
    return document.querySelector(element)
}

const body = selectElement('body')
const overlay = selectElement('.overlay')

const menuToggler = selectElement('.menu-toggle')
menuToggler.addEventListener('click', ()=>{
    overlay.classList.toggle('hidden')
    body.classList.toggle('open')
})

overlay.addEventListener('click', ()=>{
    body.classList.remove('open')
    overlay.classList.add('hidden')
})


// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 400
})
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})