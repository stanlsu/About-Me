document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.welcome-overlay');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 4000); // Remove after animations complete (2s delay + 2s animation)
});

function startZoom(event, contentId) {
    const button = event.currentTarget;
    const content = document.getElementById(contentId);  // Get specific content
    const resetBtn = document.querySelector('.reset-btn');
    const allZoomBtns = document.querySelectorAll('.zoom-btn');
    const allContents = document.querySelectorAll('.zoom-content');

    // Get the button's position
    const rect = button.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth * 100;
    const originY = (rect.top + rect.height / 2) / window.innerHeight * 100;

    // Set transform origin for this specific content
    content.style.transformOrigin = `${originX}% ${originY}%`;

    // Hide other contents if they're visible
    allContents.forEach(c => {
        if (c.id !== contentId) {
            c.classList.remove('active');
            c.classList.remove('zooming');
        }
    });

    // Start animation for this content
    content.classList.add('zooming');

    setTimeout(() => {
        content.classList.add('active');
        content.classList.remove('zooming');
    }, 100);

    // Hide all buttons
    allZoomBtns.forEach(btn => {
        btn.classList.add('hidden');
    });

    setTimeout(() => {
        resetBtn.classList.add('active');
    }, 1000);
}

function resetZoom() {
    const resetBtn = document.querySelector('.reset-btn');
    const allZoomBtns = document.querySelectorAll('.zoom-btn');
    const allContents = document.querySelectorAll('.zoom-content');

    // Hide all contents
    allContents.forEach(content => {
        content.classList.remove('active');
    });

    resetBtn.classList.remove('active');

    setTimeout(() => {
        allZoomBtns.forEach(btn => {
            btn.classList.remove('hidden');
        });
    }, 1000);
}

function createPlusSigns() {
    const container = document.getElementById('plusContainer');
    const numberOfPlus = 100;  // Increased number of plus signs

    for (let i = 0; i < numberOfPlus; i++) {
        const plus = document.createElement('div');
        plus.className = 'plus-sign';
        plus.textContent = '+';

        // Distribute vertically across entire height
        plus.style.top = `${Math.random() * 100}vh`;

        // Random starting position horizontally
        plus.style.transform = `translateX(${Math.random() * 100}vw)`;

        // Random size between 12px and 24px
        const size = 12 + Math.random() * 12;
        plus.style.fontSize = `${size}px`;

        // Random opacity between 0.1 and 0.3
        plus.style.opacity = 0.1 + Math.random() * 0.2;

        // Random animation delay for better distribution
        plus.style.animationDelay = `${Math.random() * -15}s`;

        container.appendChild(plus);
    }
}

function createPlusSigns() {
    const container = document.getElementById('plusContainer');
    const numberOfPlus = 100;  // Increased number of plus signs

    for (let i = 0; i < numberOfPlus; i++) {
        const plus = document.createElement('div');
        plus.className = 'plus-sign';
        plus.textContent = '+';

        // Distribute vertically across entire height
        plus.style.top = `${Math.random() * 100}vh`;

        // Random starting position horizontally
        plus.style.transform = `translateX(${Math.random() * 100}vw)`;

        // Random size between 12px and 24px
        const size = 12 + Math.random() * 12;
        plus.style.fontSize = `${size}px`;

        // Random opacity between 0.1 and 0.3
        plus.style.opacity = 0.1 + Math.random() * 0.2;

        // Random animation delay for better distribution
        plus.style.animationDelay = `${Math.random() * -15}s`;

        container.appendChild(plus);
    }
}

createPlusSigns();