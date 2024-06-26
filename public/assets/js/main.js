/* =============== SHOW MENU =============== */
/* Added functionality to toggle the visibility of 
the navigation menu when the toggle button is clicked, 
and to hide the menu when the close button is clicked */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* =============== REMOVE MENU MOBILE =============== */
/* Implemented functionality to remove the mobile menu 
when any navigation link is clicked */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    //When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* =============== CHANGE BACKGROUND HEADER =============== */
/* Implemented functionality to dynamically change the background 
of the header based on scroll position */
const scrollHeader = () => {
    const header = document.getElementById('header')

    /* when the scroll is greater than 50 viewport height, 
    add the scroll-header class to the header tag */
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
/* Implemented functionality to highlight active navigation links 
based on scroll position */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}


