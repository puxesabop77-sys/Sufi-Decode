// =====================================
// SUFIDECODE PREMIUM SCRIPT
// =====================================

// LOADER

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 800);

}, 3000);

});

// =====================================
// CUSTOM CURSOR
// =====================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// =====================================
// TYPEWRITER EFFECT
// =====================================

const tagline = document.querySelector(".hero-tagline");

const text =
"Yahan Hota Hai Truth Reveal";

let index = 0;

function typeWriter() {

if(index < text.length){

tagline.textContent += text.charAt(index);

index++;

setTimeout(typeWriter, 80);

}

}

if(tagline){
typeWriter();
}

// =====================================
// COUNTER ANIMATION
// =====================================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =
+counter.getAttribute("data-target");

let count = 0;

const speed = target / 100;

const update = () => {

count += speed;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{
counterObserver.observe(counter);
});

// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
document.querySelectorAll(
".case-card,.stat-card,.section-title,.evidence-card"
);

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},{
threshold:0.1
});

revealElements.forEach(item=>{

item.style.opacity = "0";

item.style.transform =
"translateY(80px)";

item.style.transition =
"all 0.9s ease";

revealObserver.observe(item);

});

// =====================================
// FLOATING EVIDENCE CARDS
// =====================================

const evidenceCards =
document.querySelectorAll(".evidence-card");

evidenceCards.forEach((card,index)=>{

card.animate(

[
{
transform:"translateY(0px)"
},
{
transform:"translateY(-12px)"
},
{
transform:"translateY(0px)"
}
],

{
duration:3000 + index*400,
iterations:Infinity
}

);

});

// =====================================
// SPOTLIGHT EFFECT
// =====================================

const spotlight =
document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

if(!spotlight) return;

spotlight.style.left =
e.clientX + "px";

spotlight.style.top =
e.clientY + "px";

});

// =====================================
// PARTICLE SYSTEM
// =====================================

const particleContainer =
document.getElementById("particles");

if(particleContainer){

for(let i=0;i<70;i++){

const particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.top =
Math.random()*100 + "%";

particle.style.animationDuration =
(5 + Math.random()*8) + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particleContainer.appendChild(particle);

}

}

// =====================================
// CASE CARD HOVER EFFECT
// =====================================

const caseCards =
document.querySelectorAll(".case-card");

caseCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-12px) rotateX(4deg)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});

// =====================================
// TRUTH METER ANIMATION
// =====================================

const meter =
document.querySelector(".meter-fill");

if(meter){

let progress = 0;

const target = 88;

function animateMeter(){

if(progress < target){

progress++;

meter.style.width =
progress + "%";

requestAnimationFrame(
animateMeter
);

}

}

animateMeter();

}

// =====================================
// GLITCH EFFECT
// =====================================

const heroTitle =
document.querySelector(".hero-title");

setInterval(()=>{

heroTitle.classList.add("glitch");

setTimeout(()=>{

heroTitle.classList.remove("glitch");

},200);

},5000);

// =====================================
// PARALLAX HERO
// =====================================

window.addEventListener("mousemove",(e)=>{

const x =
(e.clientX / window.innerWidth - 0.5) * 20;

const y =
(e.clientY / window.innerHeight - 0.5) * 20;

document.querySelector(".hero-content")
.style.transform =
`translate(${x}px,${y}px)`;

});

// =====================================
// NAVBAR SHADOW ON SCROLL
// =====================================

window.addEventListener("scroll",()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 100){

nav.style.background =
"rgba(0,0,0,.85)";

}else{

nav.style.background =
"rgba(0,0,0,.35)";

}

});

// =====================================
// CONSOLE SIGNATURE
// =====================================

console.log(`
====================================
SUFIDECODE
Investigate • Verify • Decode
====================================
`);
