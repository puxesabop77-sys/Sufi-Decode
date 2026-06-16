/* =====================================
   SUFIDECODE EVIDENCE NETWORK V1
===================================== */

(function(){

const canvas =
document.createElement("canvas");

canvas.id =
"evidence-network-canvas";

document.body.appendChild(canvas);

const ctx =
canvas.getContext("2d");

function resize(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resize();

window.addEventListener(
"resize",
resize
);

// =====================================
// NODE CLASS
// =====================================

class Node{

constructor(){

this.x =
Math.random() * canvas.width;

this.y =
Math.random() * canvas.height;

this.radius =
Math.random() * 3 + 3;

this.speedX =
(Math.random() - 0.5) * 0.3;

this.speedY =
(Math.random() - 0.5) * 0.3;

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(
this.x < 0 ||
this.x > canvas.width
){

this.speedX *= -1;

}

if(
this.y < 0 ||
this.y > canvas.height
){

this.speedY *= -1;

}

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI * 2
);

ctx.fillStyle =
"#ff2b2b";

ctx.shadowBlur = 12;
ctx.shadowColor = "#ff2b2b";

ctx.fill();

}

}

// =====================================
// CONFIG
// =====================================

const NODE_COUNT =
18;

const DISTANCE =
220;

const nodes = [];

for(
let i=0;
i<NODE_COUNT;
i++
){

nodes.push(
new Node()
);

}

// =====================================
// DRAW CONNECTIONS
// =====================================

function connectNodes(){

for(
let a=0;
a<nodes.length;
a++
){

for(
let b=a+1;
b<nodes.length;
b++
){

const dx =
nodes[a].x -
nodes[b].x;

const dy =
nodes[a].y -
nodes[b].y;

const distance =
Math.sqrt(
dx*dx + dy*dy
);

if(
distance < DISTANCE
){

ctx.beginPath();

ctx.moveTo(
nodes[a].x,
nodes[a].y
);

ctx.lineTo(
nodes[b].x,
nodes[b].y
);

ctx.strokeStyle =
`rgba(
255,
43,
43,
${0.35 - distance/900}
)`;

ctx.lineWidth = 2;

ctx.shadowBlur = 8;
ctx.shadowColor = "#ff2b2b";

ctx.stroke();

}

}

}

}

// =====================================
// MOUSE DETECTION
// =====================================

let mouseX = -9999;
let mouseY = -9999;

document.addEventListener(
"mousemove",
(e)=>{

mouseX =
e.clientX;

mouseY =
e.clientY;

}
);

function drawMouseLinks(){

nodes.forEach(node=>{

const dx =
mouseX - node.x;

const dy =
mouseY - node.y;

const distance =
Math.sqrt(
dx*dx + dy*dy
);

if(distance < 180){

ctx.beginPath();

ctx.moveTo(
mouseX,
mouseY
);

ctx.lineTo(
node.x,
node.y
);

ctx.strokeStyle =
"rgba(255,43,43,.4)";

ctx.lineWidth = 1;

ctx.stroke();

}

});

}

// =====================================
// ANIMATION LOOP
// =====================================

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

nodes.forEach(node=>{

node.update();
node.draw();

});

connectNodes();

drawMouseLinks();

requestAnimationFrame(
animate
);

}

animate();

})();
