// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================
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


// ===============================
// MENÚ ACTIVO SEGÚN SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// SOMBRA DINÁMICA EN EL NAVBAR
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("nav-sombra");
    } else {
        header.classList.remove("nav-sombra");
    }
});


// ===============================
// BOTÓN FLOTANTE IR ARRIBA
// ===============================
const btnArriba = document.createElement("button");
btnArriba.classList.add("btn-arriba");
btnArriba.innerHTML = "⬆️";
document.body.appendChild(btnArriba);

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
        btnArriba.classList.add("show");
    } else {
        btnArriba.classList.remove("show");
    }
});


// ===============================
// ANIMACIÓN INDIVIDUAL EN TARJETAS
// ===============================
const tarjetas = document.querySelectorAll(".card, .mv-card, .valor-card");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

tarjetas.forEach(card => observer.observe(card));


// ===============================
// SCROLL SUAVE PARA VERSIÓN MÓVIL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
