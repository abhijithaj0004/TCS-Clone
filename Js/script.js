const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 50,
})

// sr.reveal('.image-section-1')
sr.reveal('.text-block', {delay: 400, origin: 'bottom', interval: 100})
sr.reveal('.story-card-1', {origin: 'bottom'})
// sr.reveal('.contact__content:nth-child(1)',{origin: 'left'})
// sr.reveal('.contact__content:nth-child(2)',{origin: 'right'})
// sr.reveal('.qualification_content, .services__card', {interval: 100})

// let a= document.getElementsByClassName('.accordion');
// console.dir(a);