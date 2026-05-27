document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Navbar Background Change On Scroll
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('nav');

    if (window.scrollY > 50) {
        navbar.classList.add('active-nav');
    }
    else {
        navbar.classList.remove('active-nav');
    }

});


// Typing Animation
const text = [
    "Frontend Developer",
    "Web Designer",
    "Firebase Developer",
    "CSE Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1000);

    }
    else {

        setTimeout(type, 120);

    }

})();


// Reveal Sections On Scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection() {

    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {

            section.classList.add("show");

        }

    });

}


// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Project Card Hover Effect
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// Contact Form Alert (Optional)
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();

    });

}
