// ===============================
// SUFIDECODE - PREMIUM SCRIPT
// ===============================

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Cursor Hover Effect
const hoverElements = document.querySelectorAll(
    "a, button, .card, .case-card"
);

hoverElements.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-grow");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-grow");
    });
});

// ===============================
// TYPEWRITER EFFECT
// ===============================

const title = document.querySelector(".hero-tagline");

if(title){

const text = "Yahan Hota Hai Truth Reveal";
let index = 0;

function typeWriter() {

    if(index < text.length){
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }

}

title.textContent = "";
typeWriter();

}

// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(
".card, .section-title, .timeline-item, .case-card"
);

function revealElements() {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// INVESTIGATION COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===============================
// DETECTIVE FLASHLIGHT EFFECT
// ===============================

document.addEventListener("mousemove", (e) => {

    document.documentElement.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});

// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    if(loader){

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        },1000);

    }

});

// ===============================
// CASE FILE HOVER SOUND
// ===============================

const caseCards =
document.querySelectorAll(".case-card");

caseCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});

// ===============================
// CONSOLE SIGNATURE
// ===============================

console.log(`
=================================
SUFIDECODE
Investigate • Verify • Decode
=================================
`);
