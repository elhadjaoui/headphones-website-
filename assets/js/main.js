/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

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

