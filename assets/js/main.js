/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    })
}
/*=============== MENU HIDDEN ===============*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const removeFunction = () => {
    navMenu.classList.remove('show__menu');
}
navLink.forEach(n => n.addEventListener('click', removeFunction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header');
const scrollHeader = () => {
    if (this.scrollY >= 50) header.classList.add("scroll__header");
    else header.classList.remove("scroll__header");

}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/
const scroll_up = document.getElementById("scroll-up");

const Up = () => {
    if (this.scrollY > 200)
        scroll_up.classList.add("show-scroll")
    else
        scroll_up.classList.remove("show-scroll")

}

window.addEventListener('scroll', Up)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");
        console.log("scroly offsetTop",scrollY, sectionTop);
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        else
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");

    })
}
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)
