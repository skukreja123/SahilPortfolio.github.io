
// navbar menu
let menu = document.querySelector('#menu-id')
let navbar = document.querySelector('.navbar')

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}




// scroll section

let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
// sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);


// remove the toogle when you scoll down

menu.classList.remove('bx-x');
navbar.classList.remove('active');

};


// scroll Reveal.
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
// make the animated one come from top and other from bottom
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.img-content,.service-containor , .protofio-containor , .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .about-content h3',{origin: 'left'});
ScrollReveal().reveal('.home-content p ,.about-content p',{origin: 'right'});


// typed js continuously
var typed = new Typed('#multiple', {
    strings: ['Full Stack Developer', 'Data Scientist'],
    typeSpeed: 100,
    backSpeed: 50,
    backdelay: 100,
    loop: true
  });