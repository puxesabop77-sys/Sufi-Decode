/* =====================================
   SUFIDECODE PARTICLE ENGINE V1
===================================== */

(function () {

    // Canvas Create

    const canvas = document.createElement("canvas");
    canvas.id = "particle-canvas";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // =====================================
    // PARTICLE CLASS
    // =====================================

    class Particle {

        constructor() {
            this.reset();
        }

        reset() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.size =
                Math.random() * 2 + 1;

            this.speedY =
                Math.random() * 0.6 + 0.2;

            this.speedX =
                (Math.random() - 0.5) * 0.3;

            this.opacity =
                Math.random() * 0.7 + 0.1;

        }

        update() {

            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < -20) {

                this.y =
                    canvas.height + 20;

                this.x =
                    Math.random() * canvas.width;

            }

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(212,175,55,${this.opacity})`;

            ctx.fill();

        }

    }

    // =====================================
    // PARTICLES CREATE
    // =====================================

    const particles = [];

    const count =
        CONFIG?.particleCount || 120;

    for (let i = 0; i < count; i++) {

        particles.push(
            new Particle()
        );

    }

    // =====================================
    // MOUSE GLOW
    // =====================================

    let mouseX =
        window.innerWidth / 2;

    let mouseY =
        window.innerHeight / 2;

    document.addEventListener(
        "mousemove",
        (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

        }
    );

    function drawMouseGlow() {

        const glow =
            ctx.createRadialGradient(
                mouseX,
                mouseY,
                0,
                mouseX,
                mouseY,
                180
            );

        glow.addColorStop(
            0,
            "rgba(212,175,55,.12)"
        );

        glow.addColorStop(
            1,
            "rgba(212,175,55,0)"
        );

        ctx.fillStyle = glow;

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }

    // =====================================
    // PARTICLE CONNECTIONS
    // =====================================

    function drawConnections() {

        for (let a = 0; a < particles.length; a++) {

            for (let b = a + 1; b < particles.length; b++) {

                const dx =
                    particles[a].x - particles[b].x;

                const dy =
                    particles[a].y - particles[b].y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {

                    ctx.beginPath();

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.strokeStyle =
                        `rgba(212,175,55,${
                            0.15 - distance / 900
                        })`;

                    ctx.lineWidth = 1;

                    ctx.stroke();

                }

            }

        }

    }

    // =====================================
    // MAIN LOOP
    // =====================================

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(particle => {

            particle.update();
            particle.draw();

        });

        drawConnections();

        drawMouseGlow();

        requestAnimationFrame(
            animate
        );

    }

    animate();

})();
