const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                         : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ==================== EMAIL JS ===================== */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_fvd7nqr', 'template_17z06vj', '#contact-form', '0T4P-fLZqKXE6OLTm')
    .then(() => {
        contactMessage.textContent = 'Votre message a bien été envoyé'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()

    }, () => {
        contactMessage.textContent = "Votre message n'a pas été envoyé"
    })
}

contactForm.addEventListener('submit', sendEmail)