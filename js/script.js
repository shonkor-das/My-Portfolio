
/*==== toggle icon navbar====*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*===== Scroll Sections======*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('heaer nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*====== sticky navbar =====*/
    let header = document.querySelector('header');
    header.classList.toggle('stick'), window.scroll > 100;

    /*====== remove toggle icon and navbar when click navbar link (scroll)=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======= scroll reveal ======*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-content a,p, .service-container, .portfolio-box, .contact form, .footer-icon', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .btn', { origin: 'left' });

/*======= Typed js ======*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Freelancer', 'Instructor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/*===== CV Download =====*/
let button = document.querySelector('home-content a');
button.addEventListener("click", () => {
    // alert("success");
    button.style.paddingRight = "10px";
    setTimeout(() =>{
        button.style.transition = ".3s ease-in-out";
        button.style.paddingRight = "0px";
    },3000);
})