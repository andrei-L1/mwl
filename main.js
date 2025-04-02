
const facts = [
    "Your smile has its own unique frequency that brightens the world.",
    "You have this incredible talent for making people feel truly seen.",
    "The way your mind works is like watching magic unfold.",
    "Your resilience in tough times is quietly awe-inspiring.",
    "You possess a rare combination of strength and tenderness.",
    "Your laugh should be bottled as a happiness elixir.",
    "You have an artist's soul, whether you realize it or not.",
    "The world is objectively better because you're in it.",
    "Your kindness creates ripples that reach further than you know.",
    "You're growing into yourself so beautifully - it's an honor to witness.",
    "Your thoughtfulness shows in the smallest gestures that mean the most.",
    "You have this brilliant mind that comes up with the most wonderful ideas.",
    "Simply being you is more than enough - you don't need to prove anything.",
    "You have a gift for understanding people in a way few others do.",
    "Your presence is like a warm blanket on a cold day."
];

function showFact() {
    const factDisplay = document.getElementById('factDisplay');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    factDisplay.style.display = "block";
    factDisplay.innerHTML = randomFact;
    
    // Add a random sticker to the fact
    const stickers = ['✨', '💖', '🌟', '🌼', '🍀', '🎀', '🧡'];
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    
    factDisplay.innerHTML += `<div class="sticker" style="bottom: -10px; right: -10px; transform: rotate(${Math.random() * 30 - 15}deg);">${randomSticker}</div>`;
}

// Add random rotation to memories on load
document.addEventListener('DOMContentLoaded', function() {

    // Add this to your DOMContentLoaded script
    document.querySelectorAll('.memory').forEach(memory => {
        // Create multiple tape pieces
        for(let i = 0; i < 2; i++) {
            const tape = document.createElement('div');
            tape.className = 'tape-piece';
            tape.style.cssText = `
                position: absolute;
                width: ${40 + Math.random() * 30}px;
                height: ${15 + Math.random() * 10}px;
                background: linear-gradient(to bottom, 
                    rgba(255,255,255,0.7), 
                    rgba(255,255,255,0.3));
                transform: rotate(${-5 + Math.random() * 10}deg);
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                z-index: 2;
                top: ${-8 + Math.random() * 10}px;
                ${Math.random() > 0.5 ? 'left' : 'right'}: ${10 + Math.random() * 20}px;
            `;
            memory.appendChild(tape);
        }
    });

    const memories = document.querySelectorAll('.memory');
    memories.forEach(memory => {
        const rotation = Math.random() * 6 - 3; // Random between -3 and 3 degrees
        memory.style.transform = `rotate(${rotation}deg)`;
    });
});

// Create floating hearts
function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts';
    document.body.appendChild(heartsContainer);

    const heartColors = [
        'rgba(255, 107, 107, 0.6)',  // --accent
        'rgba(255, 209, 102, 0.6)',  // --highlight
        'rgba(255, 138, 138, 0.6)',
        'rgba(255, 166, 166, 0.6)'
    ];

    // Function to create a single heart
    function createSingleHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 15 + 10) + 's';
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    // Initially create 20 hearts
    for (let i = 0; i < 20; i++) {
        createSingleHeart();
    }

    // Keep creating new hearts while maintaining a max of 20 on screen
    setInterval(() => {
        if (heartsContainer.childElementCount < 20) {
            createSingleHeart();
        }
    }, 500);  // Check every 500ms to add a heart if needed
}

createHearts();


// Start the hearts when page loads
document.addEventListener('DOMContentLoaded', createHearts);



const reasons = [
    "Your kindness",
    "Your smile",
    "Your thoughtfulness",
    "Your humor",
    "Your resilience",
    "Your generosity",
    "Your compassion",
    "Your strength",
    "Your creativity",
    "Your warmth",
    "Your determination",
    "Your patience",
    "Your wisdom",
    "Your honesty",
    "Your empathy",
    "Your spirit",
    "Your positivity"
];


function addBlossom() {
    const reason = prompt("Add another reason why they're wonderful:");
    if (reason) {
        reasons.push(reason);
        createBlossoms();
    }
}

function createBlossoms() {
    const container = document.getElementById('blossoms');
    container.innerHTML = '';
    reasons.forEach((reason, i) => {
        const blossom = document.createElement('div');
        blossom.className = 'blossom';
        blossom.textContent = '❤';
        blossom.style.left = `${20 + Math.random() * 60}%`;
        blossom.style.top = `${20 + Math.random() * 60}%`;
        blossom.style.animationDelay = `${Math.random() * 2}s`;
        blossom.title = reason;
        container.appendChild(blossom);
    });
}

document.addEventListener('DOMContentLoaded', createBlossoms);

const bottleMessages = [
    "You're my favorite notification",
    "I'd choose you in every lifetime",
    "You make my heart skip beats",
    "Your smile is my favorite emoji",
    "I fall for you more every day"
];

function openBottle() {
    const randomMessage = bottleMessages[Math.floor(Math.random() * bottleMessages.length)];
    document.querySelector('.message').textContent = randomMessage;
    document.querySelector('.bottle').style.backgroundColor = 'rgba(0, 200, 150, 0.3)';
    setTimeout(() => {
        document.querySelector('.bottle').style.backgroundColor = 'rgba(0, 150, 200, 0.2)';
    }, 3000);
}


// Set your anniversary date (YYYY, MM-1, DD)
const anniversary = new Date(2024, 11, 25); // December 25, 2024

function updateCountdown() {
    const now = new Date();
    const diff = anniversary - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

    function logout() {
        // Create a full-screen overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'var(--paper)';
        overlay.style.zIndex = '1000';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.6s ease';
        document.body.appendChild(overlay);
        
        // Fade in the overlay
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        // After animation completes
        setTimeout(() => {
            // Clear the authentication flag
            localStorage.removeItem('passwordUnloacked');
            
            // Redirect
            window.location.href = 'index.html';
        }, 600);
    }

    // Check if coming from password page
    if (localStorage.getItem('passwordUnloacked')) {
        document.body.style.opacity = '1';
    } else {
        // If not authenticated, redirect back
        window.location.href = 'index.html';
    }





const lilyColors = [
{ petal: "#ffffff", edge: "#ffb6c1", center: "#FFD700", pollen: ["#FFD700", "#FFA500"] }, // classic pink-edged
{ petal: "#fff0f5", edge: "#ff69b4", center: "#FF6347", pollen: ["#FF6347", "#FF4500"] }, // hot pink
{ petal: "#f8f8ff", edge: "#dda0dd", center: "#9370DB", pollen: ["#9370DB", "#8A2BE2"] }, // lavender
{ petal: "#fffff0", edge: "#ffa07a", center: "#FF8C00", pollen: ["#FF8C00", "#FF4500"] }, // soft coral
{ petal: "#fffaf0", edge: "#98fb98", center: "#32CD32", pollen: ["#ADFF2F", "#7CFC00"] }  // mint green
];

let lilyCount = 0;
const lilyMessages = [
"One lily for your beautiful smile",
"Two lilies for your kind heart",
"A garden of lilies for all the love you give",
"You deserve infinite lilies",
"Your kindness makes lilies bloom",
"Each lily carries a wish for your happiness"
];

function createLily(x, y) {
const lily = document.createElement('div');
lily.className = 'lily';
lily.style.left = `${x - 40}px`;
lily.style.top = `${y - 40}px`;

// Random color variation
const color = lilyColors[Math.floor(Math.random() * lilyColors.length)];

// Create petals (6 petals for a full lily)
for (let i = 0; i < 6; i++) {
    const petal = document.createElement('div');
    petal.className = 'lily-petal';
    
    // Create more organic, asymmetrical petal shape with curvature variations
    const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath.setAttribute("d", "M50 5 C65 -5 80 10 75 25 C90 40 80 65 65 75 C50 85 35 80 25 70 C10 60 15 35 30 25 C25 10 35 15 50 5 Z");
    svgPath.setAttribute("fill", color.petal);
    svgPath.setAttribute("stroke", color.edge);
    svgPath.setAttribute("stroke-width", "1.2");
    svgPath.setAttribute("stroke-linejoin", "round");
    
    // Add subtle gradient for depth
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", `petalGradient${i}`);
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");
    
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", lightenColor(color.petal, 15));
    
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", darkenColor(color.petal, 10));
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svgPath.setAttribute("fill", `url(#petalGradient${i})`);
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.appendChild(defs);
    svg.appendChild(svgPath);
    
    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;
    
    petal.style.backgroundImage = `url('${svgUrl}')`;
    petal.style.animation = `petalFloat ${3 + Math.random() * 3}s ease-in-out infinite alternate ${i * 0.1}s`;
    petal.style.filter = `drop-shadow(0 2px 3px rgba(0,0,0,0.15))`;
    lily.appendChild(petal);
}

// Helper functions for color manipulation
function lightenColor(color, percent) {
    // Implement your color lightening logic here
    return color; // placeholder
}

function darkenColor(color, percent) {
    // Implement your color darkening logic here
    return color; // placeholder
}

// Create center with more detail
const center = document.createElement('div');
center.className = 'lily-center';
center.style.background = `radial-gradient(circle, ${color.center} 30%, ${darkenColor(color.center, 20)} 100%)`;
lily.appendChild(center);

// Add center dots
for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    dot.className = 'lily-center-dot';
    dot.style.transform = `rotate(${i * 30}deg) translate(12px) rotate(${i * -30}deg)`;
    dot.style.background = darkenColor(color.center, 30 + Math.random() * 20);
    center.appendChild(dot);
}

// Create stem with gradient
const stem = document.createElement('div');
stem.className = 'lily-stem';
lily.appendChild(stem);



// Create leaves that stay BELOW the flower
const leafCount = 2 + Math.floor(Math.random() * 1); // 2-3 leaves
for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'lily-leaf';

    // Alternate left/right placement
    const isLeft = i % 2 === 0;
    
    // Angle adjustments (leaves fan outward)
    const baseAngle = isLeft ? -20 : 20; // Reduced angle for tighter spread
    const angleVariation = Math.random() * 10; // Less randomness
    const angle = baseAngle + (isLeft ? -angleVariation : angleVariation);

    // X-offset (closer to center to avoid covering flower)
    const offsetX = isLeft 
        ? -16 + Math.random() * 5  // Left: -15px to -10px
        : 16 - Math.random() * 5;  // Right: 10px to 15px

    // Y-offset (lower position to stay behind flower)
    const offsetY = 100 + Math.random() * 10; // 70-80px from top (pushes leaves down)

    // Size variations (smaller leaves higher up)
    const scale = 0.7 + Math.random() * 0.3; // Smaller scale
    const width = 35 + Math.random() * 10;    // 35-45px wide

    // Critical: Ensure leaves render BEHIND flower (z-index < flower's z-index)
    leaf.style.zIndex = 0; // Lower than flower's z-index (e.g., flower = 1+)
    leaf.style.transformOrigin = 'center bottom';
    leaf.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${angle}deg) scale(${scale})`;
    leaf.style.width = `${width}px`;

    // Natural color (darker = recedes visually)
    const hue = 120 + (Math.random() * 5 - 2.5); // Minimal hue shift
    const saturation = 50 + Math.random() * 10;   // 50-60%
    const lightness = 30 + Math.random() * 5;     // 30-35% (darker)
    leaf.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // Subtle shadow (enhances depth without covering flower)
    leaf.style.boxShadow = `1px 1px 2px rgba(0, 0, 0, 0.1)`;
    
    lily.appendChild(leaf);
}
document.body.appendChild(lily);

// Gentle fade out after 15-20 seconds
setTimeout(() => {
    lily.style.transition = 'opacity 3s ease, transform 3s ease';
    lily.style.opacity = '0';
    lily.style.transform = 'translateY(20px)';
    setTimeout(() => lily.remove(), 3000);
}, 15000 + Math.random() * 5000);

// Add pollen particles after 1 second
setTimeout(() => createPollen(x, y, color.pollen), 1000);

// Lily count messages
lilyCount++;
if (lilyCount <= 3 || lilyCount === 5 || lilyCount === 8 || lilyCount % 10 === 0) {
    showFloatingMessage(
        lilyMessages[Math.min(lilyCount - 1, lilyMessages.length - 1)] || 
        lilyMessages[lilyMessages.length - 1], 
        x, y
    );
}
}

function createPollen(x, y, colors) {
for (let i = 0; i < 10; i++) {
    const pollen = document.createElement('div');
    pollen.className = 'pollen-particle';
    pollen.style.left = `${x}px`;
    pollen.style.top = `${y}px`;
    pollen.style.background = colors[Math.floor(Math.random() * colors.length)];
    pollen.style.setProperty('--distance', `${Math.random() * 80 + 30}px`);
    pollen.style.setProperty('--angle', `${Math.random() * 360}deg`);
    pollen.style.animationDelay = `${i * 0.1}s`;
    pollen.style.width = `${3 + Math.random() * 5}px`;
    pollen.style.height = pollen.style.width;
    document.body.appendChild(pollen);
    
    setTimeout(() => pollen.remove(), 3000 + Math.random() * 2000);
}
}

function showFloatingMessage(text, x, y) {
const message = document.createElement('div');
message.className = 'floating-message';
message.textContent = text;
message.style.left = `${x}px`;
message.style.top = `${y - 50}px`;
message.style.fontFamily = "'Arial', sans-serif";
message.style.fontSize = `${14 + Math.min(lilyCount / 3, 6)}px`;
message.style.padding = `${8 + Math.min(lilyCount / 5, 4)}px ${12 + Math.min(lilyCount / 5, 6)}px`;
document.body.appendChild(message);

setTimeout(() => {
    message.style.transition = 'opacity 1s ease';
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 1000);
}, 4000);
}

function darkenColor(color, percent) {
const num = parseInt(color.replace("#", ""), 16);
const amt = Math.round(2.55 * percent);
const R = (num >> 16) - amt;
const G = (num >> 8 & 0x00FF) - amt;
const B = (num & 0x0000FF) - amt;
return `#${(
    0x1000000 +
    (R < 0 ? 0 : R) * 0x10000 +
    (G < 0 ? 0 : G) * 0x100 +
    (B < 0 ? 0 : B)
).toString(16).slice(1)}`;
}

document.addEventListener('click', (e) => {

    let hasOnClick = e.target.closest('[onclick]');

    const clickableSelectors = [
        'button', 'a', 'input', 'textarea', 'select', 'label', 
        'details', 'summary', 'form', 'fieldset', 'option', 'optgroup',
        'menu', 'menuitem', 'area', 'canvas', 'video', 'audio',
        '[onclick]'  
    ];

    if (!hasOnClick && !e.target.closest(clickableSelectors.join(', '))) {
        createLily(e.pageX, e.pageY);
    }
});



// Add initial lilies on load
window.addEventListener('load', () => {
for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        createLily(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }, i * 800);
}

// Add floating pollen occasionally
setInterval(() => {
    if (Math.random() > 0.7) {
        createPollen(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            ["#FFD700", "#FFA500"]
        );
    }
}, 5000);
});
