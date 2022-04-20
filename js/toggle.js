let hamburgerIcon = document.getElementById('hamburger-icon')
let toggle = document.querySelector(".toggle")
let mobileMenu = document.querySelector(".mobile-menu")

function openMobileMenu() {
    toggle.classList.add("toggle_opened")
    toggle.classList.remove("toggle_closed")
    mobileMenu.style.display = "block"
}

function closeMobileMenu() {
    toggle.classList.add("toggle_closed")
    toggle.classList.remove("toggle_opened")
    mobileMenu.style.display = "none"
}

function toggleMenu() {
    if (hamburgerIcon.classList.contains('open')) {
        closeMobileMenu()
    } else {
        openMobileMenu()
    }
    hamburgerIcon.classList.toggle('open');
}

let mql = window.matchMedia('(max-width: 480px)');


function mediaScreenChange () {
    closeMobileMenu()
    if (hamburgerIcon.classList.contains('open')) {
        hamburgerIcon.classList.remove("open")
    }
}

mql.addEventListener('change', mediaScreenChange);
