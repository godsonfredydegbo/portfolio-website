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

/* ==================== SCROLL UP ===================== */

const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')

      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
                
}
window.addEventListener('scroll', scrollUp)

/* ==================== SCROLL SECTION ACTIVE LINKS ===================== */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 56,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*="' + sectionId + '"]')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)