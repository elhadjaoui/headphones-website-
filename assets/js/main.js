/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle')
     navClose = document.getElementById('nav-close')

    if (navToggle)
    {
        navToggle.addEventListener('click', () =>
        {
            navMenu.classList.add('show__menu');
        })
    }
/*=============== MENU HIDDEN ===============*/
if (navClose)
{
    navClose.addEventListener('click', () =>
    {
        navMenu.classList.remove('show__menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const removeFunction = ()=>
{
    navMenu.classList.remove('show__menu');
}
navLink.forEach(n => n.addEventListener('click', removeFunction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById('header');
const scrollHeader = ()=>
{
    if (this.scrollY >= 50) header.classList.add("scroll__header");
    else  header.classList.remove("scroll__header");

}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

