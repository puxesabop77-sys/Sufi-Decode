/* =====================================
   SUFIDECODE ANIMATION ENGINE V1
===================================== */

(function(){

// =====================================
// HERO PARALLAX
// =====================================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener(
"mousemove",
(e)=>{

if(!heroContent) return;

const x =
(e.clientX / window.innerWidth - 0.5) * 20;

const y =
(e.clientY / window.innerHeight - 0.5) * 20;

heroContent.style.transform =
`translate(${x}px,${y}px)`;

}
);

// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
document.querySelectorAll(
".case-card,.stat-card,.section-title,.evidence-card"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"reveal-active"
);

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

observer.observe(el);

});

// =====================================
// CARD TILT EFFECT
// =====================================

const cards =
document.querySelectorAll(
".case-card,.stat-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 12;

const rotateX =
((y / rect.height) - 0.5) * -12;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)
`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

}
);

});

// =====================================
// NAVBAR HIDE / SHOW
// =====================================

let lastScroll = 0;

const nav =
document.querySelector("nav");

window.addEventListener(
"scroll",
()=>{

const current =
window.pageYOffset;

if(current > lastScroll){

nav.style.transform =
"translateY(-100%)";

}else{

nav.style.transform =
"translateY(0)";

}

lastScroll = current;

}
);

// =====================================
// FLOATING HERO TITLE
// =====================================

const heroTitle =
document.querySelector(".hero-title");

if(heroTitle){

setInterval(()=>{

heroTitle.animate(

[
{
transform:"translateY(0px)"
},
{
transform:"translateY(-6px)"
},
{
transform:"translateY(0px)"
}
],

{
duration:2500,
iterations:1
}

);

},3000);

}

// =====================================
// GOLD FLASH EFFECT
// =====================================

function flashGold(){

document.body.classList.add(
"gold-flash"
);

setTimeout(()=>{

document.body.classList.remove(
"gold-flash"
);

},400);

}

setInterval(
flashGold,
20000
);

// =====================================
// SECTION ACTIVE TRACKER
// =====================================

const sections =
document.querySelectorAll("section");

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const top =
section.offsetTop;

if(
window.scrollY >=
top - 250
){

current =
section.getAttribute("id");

}

});

document
.querySelectorAll("nav a")
.forEach(link=>{

link.classList.remove(
"active-link"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active-link"
);

}

});

}
);

})();
