// ===== ANIMACIÓN AL HACER SCROLL =====
function revelar() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revelar);
revelar();

// ===== CAMBIO AUTOMÁTICO DEL MENÚ ACTIVO =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
