/**
 * Background Animation for Telegram Mini App
 * Crypto Terminal Style (Grid + Line Graph + Candles)
 */

(function () {
    console.log("📊 Background Animation v46 loaded");
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let lastTime = 0;
    const fpsLimit = 30;
    const frameInterval = 1000 / fpsLimit;

    // Animation state
    const gridOffset = { x: 0, y: 0 };
    const linePoints = [];
    const candles = [];
    const particles = [];
    let price = 0;
    let targetPrice = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        price = height / 2;
        targetPrice = price;

        // Initialize line points
        linePoints.length = 0;
        for (let i = 0; i < width / 5 + 10; i++) {
            linePoints.push(price);
        }
    }

    window.addEventListener('resize', resize);
    resize();

    function drawGrid() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;

        const step = 40;
        ctx.beginPath();
        for (let x = gridOffset.x % step; x < width; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = gridOffset.y % step; y < height; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();
    }

    function updatePrice() {
        if (Math.random() > 0.95) {
            targetPrice = height * 0.3 + Math.random() * (height * 0.4);
        }
        price += (targetPrice - price) * 0.05;

        linePoints.shift();
        linePoints.push(price);

        // Periodically spawn a candle
        if (Math.random() > 0.98) {
            const isGreen = Math.random() > 0.5;
            candles.push({
                x: width,
                y: price,
                w: 6,
                h: 10 + Math.random() * 20,
                isGreen: isGreen,
                speed: 1.5 + Math.random()
            });
        }

        // Periodically spawn a particle/glowing point
        if (Math.random() > 0.9) {
            particles.push({
                x: width,
                y: Math.random() * height,
                vx: - (1 + Math.random() * 2),
                size: 1 + Math.random() * 2,
                opacity: 0.2 + Math.random() * 0.5
            });
        }
    }

    function drawLine() {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 220, 150, 0.2)'; // Faint green
        ctx.lineWidth = 2;

        const step = 5;
        for (let i = 0; i < linePoints.length; i++) {
            const x = i * step;
            const y = linePoints[i];
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Glow at the end of the line
        const lastY = linePoints[linePoints.length - 1];
        const lastX = (linePoints.length - 1) * step;

        const grad = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 20);
        grad.addColorStop(0, 'rgba(0, 220, 150, 0.4)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(lastX, lastY, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    function updateObjects() {
        // Update candles
        for (let i = candles.length - 1; i >= 0; i--) {
            const c = candles[i];
            c.x -= c.speed;
            if (c.x < -20) candles.splice(i, 1);
        }

        // Update particles
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            if (p.x < -10) particles.splice(i, 1);
        }

        gridOffset.x -= 0.5;
    }

    function drawObjects() {
        // Draw candles
        candles.forEach(c => {
            ctx.fillStyle = c.isGreen ? 'rgba(0, 220, 150, 0.3)' : 'rgba(255, 77, 77, 0.3)';
            ctx.fillRect(c.x, c.y - c.h / 2, c.w, c.h);
            // Wick
            ctx.strokeStyle = ctx.fillStyle;
            ctx.beginPath();
            ctx.moveTo(c.x + c.w / 2, c.y - c.h * 0.7);
            ctx.lineTo(c.x + c.w / 2, c.y + c.h * 0.7);
            ctx.stroke();
        });

        // Draw particles
        particles.forEach(p => {
            ctx.fillStyle = `rgba(0, 220, 150, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function animate(currentTime) {
        requestAnimationFrame(animate);

        const delta = currentTime - lastTime;
        if (delta < frameInterval) return;
        lastTime = currentTime - (delta % frameInterval);

        ctx.clearRect(0, 0, width, height);

        // Background color
        ctx.fillStyle = '#05070a';
        ctx.fillRect(0, 0, width, height);

        drawGrid();
        updatePrice();
        updateObjects();
        drawObjects();
        drawLine();

        // Debug version tag on canvas
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.font = '10px Arial';
        ctx.fillText('BG-ANIM V46', 10, 20);
    }

    requestAnimationFrame(animate);

    // Apply basic CSS to the canvas
    const style = document.createElement('style');
    style.textContent = `
        #bg-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
})();
