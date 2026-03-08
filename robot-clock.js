/**
 * Robot Assistant Candlestick Clock
 * Real-time clock for Telegram Mini App
 */

(function () {
    console.log("🤖 Robot Clock v45 loaded");
    const DIGITS = {
        '0': [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
        '1': [[0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],
        '2': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
        '3': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
        '4': [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
        '5': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
        '6': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
        '7': [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]],
        '8': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
        '9': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]]
    };

    let previousTimeStr = "";

    function initRobot() {
        // Create the robot HTML structure if it doesn't exist
        if (document.querySelector('.robot-assistant-container')) return;

        const container = document.createElement('div');
        container.className = 'robot-assistant-container';
        container.innerHTML = `
            <div class="robot-head">
                <div class="robot-eye left"></div>
                <div class="robot-eye right"></div>
            </div>
            <div class="robot-body">
                <div class="robot-screen">
                    <div id="robot-clock-display" class="candlestick-clock"></div>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        updateClock();
        setInterval(updateClock, 1000);
    }

    function createCandle(isUp) {
        const candle = document.createElement('div');
        candle.className = `candle ${isUp ? 'up' : 'down'}`;
        candle.innerHTML = `
            <div class="candle-wick"></div>
            <div class="candle-body"></div>
        `;
        return candle;
    }

    function renderDigit(digit, container) {
        container.innerHTML = '';
        container.className = 'clock-digit-grid';

        const pattern = DIGITS[digit] || DIGITS['0'];
        pattern.forEach(row => {
            row.forEach(cell => {
                const cellDiv = document.createElement('div');
                if (cell === 1) {
                    const isUp = Math.random() > 0.5;
                    cellDiv.appendChild(createCandle(isUp));
                }
                container.appendChild(cellDiv);
            });
        });
    }

    function updateClock() {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const timeStr = `${hh}${mm}`;

        const display = document.getElementById('robot-clock-display');
        if (!display) return;

        // If it's the first run, create the digit slots and clear previousTimeStr
        if (display.children.length === 0) {
            display.innerHTML = `
                <div id="digit-h1"></div><div id="digit-h2"></div>
                <div class="clock-separator"><div class="sep-dot"></div><div class="sep-dot"></div></div>
                <div id="digit-m1"></div><div id="digit-m2"></div>
            `;
            previousTimeStr = "    "; // 4 spaces for first render force
        }

        const slots = ['digit-h1', 'digit-h2', 'digit-m1', 'digit-m2'];

        for (let i = 0; i < timeStr.length; i++) {
            const digit = timeStr[i];
            const slotId = slots[i];
            const slot = document.getElementById(slotId);

            if (previousTimeStr[i] !== digit) {
                renderDigit(digit, slot);
                slot.classList.remove('digit-changed');
                void slot.offsetWidth; // Trigger reflow
                slot.classList.add('digit-changed');
            }
        }

        previousTimeStr = timeStr;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRobot);
    } else {
        initRobot();
    }
})();
