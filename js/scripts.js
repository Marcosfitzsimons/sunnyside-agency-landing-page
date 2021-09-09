/* const menuToggle = document.querySelector('.hamburger'); 
const headerNav = document.querySelector('.header-nav');  */

const navSlide = () => {
    const menuToggle = document.querySelector('.hamburger');
    const headerNav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.header-nav__enlace')

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        headerNav.classList.toggle('header-nav--active');
        menuToggle.classList.toggle('hamburger--active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                    link.style.animation = `header-navFade 0.5s ease forwards ${index / 7 + .4}s`;
                }
        })
    })

}

navSlide();

