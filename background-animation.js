/**
 * Background Animation for Telegram Mini App
 * Crypto Terminal Style (Grid + Line Graph + Candles + Floating Financial Elements)
 * Optimized for mobile performance
 */

(function () {
    console.log("📊 Background Animation v66 (Advanced) Loaded");
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
    const financialElements = [];
    const particles = [];
    let price = 0;
    let targetPrice = 0;

    // Asset Preloading
    const assetConfig = [
        { name: 'btc', url: 'assets/background/bitcoin_coin.png' },
        { name: 'eth', url: 'assets/background/ethereum_coin.png' },
        { name: 'sol', url: 'assets/background/solana_coin.png' },
        { name: 'usd', url: 'assets/background/usd_100_bill.png' },
        { name: 'eur', url: 'assets/background/euro_500_bill.png' },
        { name: 'yen', url: 'assets/background/yen_10000_bill.png' }
    ];

    const images = {};
    let loadedCount = 0;

    assetConfig.forEach(cfg => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            images[cfg.name] = img;
        };
        img.src = cfg.url;
    });

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        price = height / 2;
        targetPrice = price;

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
            ctx.moveTo(x, 0); ctx.lineTo(x, height);
        }
        for (let y = gridOffset.y % step; y < height; y += step) {
            ctx.moveTo(0, y); ctx.lineTo(width, y);
        }
        ctx.stroke();
    }

    function spawnFinancialElement() {
        if (loadedCount < assetConfig.length) return;
        if (financialElements.length > 5) return; // Performance limit

        const names = Object.keys(images);
        const name = names[Math.floor(Math.random() * names.length)];
        const side = Math.floor(Math.random() * 4); // 0:R, 1:L, 2:T, 3:B

        const size = 60 + Math.random() * 60;
        let x, y, vx, vy;

        if (side === 0) { x = width + size; y = Math.random() * height; vx = -0.3 - Math.random() * 0.5; vy = (Math.random() - 0.5) * 0.3; }
        else if (side === 1) { x = -size; y = Math.random() * height; vx = 0.3 + Math.random() * 0.5; vy = (Math.random() - 0.5) * 0.3; }
        else if (side === 2) { x = Math.random() * width; y = -size; vx = (Math.random() - 0.5) * 0.3; vy = 0.3 + Math.random() * 0.5; }
        else { x = Math.random() * width; y = height + size; vx = (Math.random() - 0.5) * 0.3; vy = -0.3 - Math.random() * 0.5; }

        financialElements.push({
            img: images[name],
            x, y, vx, vy,
            size,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.01,
            pulse: 0,
            pulseSpeed: 0.02 + Math.random() * 0.02
        });
    }

    function updatePrice() {
        if (Math.random() > 0.95) {
            targetPrice = height * 0.2 + Math.random() * (height * 0.6);
        }
        price += (targetPrice - price) * 0.03;

        linePoints.shift();
        linePoints.push(price);

        // Increased candle spawn rate (was 0.98)
        if (Math.random() > 0.94) {
            const isGreen = Math.random() > 0.5;
            candles.push({
                x: width,
                y: price,
                w: 6,
                h: 8 + Math.random() * 25,
                isGreen: isGreen,
                speed: 1.2 + Math.random() * 1.5
            });
        }

        // Floating elements spawn
        if (Math.random() > 0.992) spawnFinancialElement();

        // High frequency glow particles
        if (Math.random() > 0.8) {
            particles.push({
                x: width, y: Math.random() * height,
                vx: -(1 + Math.random() * 2),
                size: Math.random() * 2,
                opacity: 0.1 + Math.random() * 0.3
            });
        }
    }

    function drawLine() {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 220, 150, 0.15)';
        ctx.lineWidth = 2;
        const step = 5;
        for (let i = 0; i < linePoints.length; i++) {
            const x = i * step; const y = linePoints[i];
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        const lastY = linePoints[linePoints.length - 1];
        const lastX = (linePoints.length - 1) * step;
        const grad = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 30);
        grad.addColorStop(0, 'rgba(0, 220, 150, 0.3)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(lastX, lastY, 30, 0, Math.PI * 2); ctx.fill();
    }

    function updateObjects() {
        for (let i = candles.length - 1; i >= 0; i--) {
            candles[i].x -= candles[i].speed;
            if (candles[i].x < -30) candles.splice(i, 1);
        }
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].x += particles[i].vx;
            if (particles[i].x < -10) particles.splice(i, 1);
        }
        for (let i = financialElements.length - 1; i >= 0; i--) {
            const fe = financialElements[i];
            fe.x += fe.vx; fe.y += fe.vy;
            fe.rot += fe.rotSpeed;
            fe.pulse += fe.pulseSpeed;
            if (fe.x < -fe.size * 2 || fe.x > width + fe.size * 2 || fe.y < -fe.size * 2 || fe.y > height + fe.size * 2) {
                financialElements.splice(i, 1);
            }
        }
        gridOffset.x -= 0.4;
    }

    function drawObjects() {
        // Draw candles
        candles.forEach(c => {
            ctx.fillStyle = c.isGreen ? 'rgba(0, 220, 150, 0.25)' : 'rgba(255, 77, 77, 0.25)';
            ctx.fillRect(c.x, c.y - c.h / 2, c.w, c.h);
            ctx.strokeStyle = ctx.fillStyle;
            ctx.beginPath(); ctx.moveTo(c.x + c.w / 2, c.y - c.h * 0.7); ctx.lineTo(c.x + c.w / 2, c.y + c.h * 0.7); ctx.stroke();
        });

        // Draw financial elements
        financialElements.forEach(fe => {
            ctx.save();
            ctx.translate(fe.x, fe.y);
            ctx.rotate(fe.rot);

            // Neon glow effect (soft pulse)
            const glowSize = 5 + Math.sin(fe.pulse) * 5;
            ctx.shadowBlur = glowSize;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';

            ctx.globalAlpha = 0.4; // Soft background appearance
            ctx.drawImage(fe.img, -fe.size / 2, -fe.size / 2, fe.size, fe.size);
            ctx.restore();
        });

        // Draw particles
        particles.forEach(p => {
            ctx.fillStyle = `rgba(0, 220, 150, ${p.opacity})`;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        });
    }

    function animate(currentTime) {
        requestAnimationFrame(animate);
        const delta = currentTime - lastTime;
        if (delta < frameInterval) return;
        lastTime = currentTime - (delta % frameInterval);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#05070a'; // Ultra dark terminal background
        ctx.fillRect(0, 0, width, height);

        drawGrid();
        updatePrice();
        updateObjects();
        drawObjects();
        drawLine();
    }

    requestAnimationFrame(animate);

    const style = document.createElement('style');
    style.textContent = `
        #bg-canvas {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            z-index: -1;
            pointer-events: none;
            background: #05070a;
        }
    `;
    document.head.appendChild(style);
})();
