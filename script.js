
/* ========================================
   1. GET THE HTML ELEMENTS
======================================== */

const surpriseButton = document.getElementById('surpriseButton');
const letter = document.getElementById('letter');
const secondSurpriseButton = document.getElementById('secondSurpriseButton');
const specialMessage = document.getElementById('specialMessage');

const heartsContainer = document.getElementById('hearts-container');
const balloonsContainer = document.getElementById('balloons-container');

const surpriseButtonText =
    document.getElementById('surpriseButtonText');

const secondSurpriseButtonText =
    document.getElementById('secondSurpriseButtonText');

/* ========================================
   2. FIRST SURPRISE BUTTON
   Opens the first letter and starts balloons
======================================== */

surpriseButton.addEventListener('click', function() {
    // Reveal the first letter
    letter.hidden = false;

    // Reveal the button for the second surprise
    secondSurpriseButton.hidden = false;

    // Start the birthday balloon celebration
    startBalloons();

    // Change the button after it is clicked
    surpriseButtonText.textContent = "🥳🎂🎉";
    surpriseButton.disabled = true;
});


/* ========================================
   3. FLOATING HEARTS
   These continue appearing as before
======================================== */

function createHeart() {
    const heart = document.createElement("span");

    // Randomly choose an outlined or filled heart
    heart.classList.add("floating-heart");
    heart.textContent = Math.random() < 0.5 ? "♡" : "♥";

    // Random horizontal position
    heart.style.left = Math.random() * 95 + "vw";

    // Random heart size
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    // Random floating speed
    const duration = 5 + Math.random() * 5;
    heart.style.animationDuration = duration + "s";

    // Put the heart on the page
    heartsContainer.appendChild(heart);

    // Remove it after the animation finishes
    setTimeout(function() {
        heart.remove();
    }, duration * 1000);
}

// Create a new heart every 800 milliseconds
setInterval(createHeart, 800);


/* ========================================
   4. FLOATING BALLOONS
   These start ONLY after the first button
   is clicked
======================================== */

// Pastel balloon colors

/* BIRTHDAY BALLOONS */

const balloonColors = [
    "#ff69b4",
    "#ffe066",
    "#ffb38a",
    "#c9a0ff"
];

let balloonsStarted = false;

function createBalloon() {
    const balloon = document.createElement("div");

    balloon.className = "floating-balloon";

    const color = balloonColors[
        Math.floor(Math.random() * balloonColors.length)
    ];

    balloon.style.backgroundColor = color;
    balloon.style.left = Math.random() * 90 + "vw";

    const string = document.createElement("span");
    string.className = "balloon-string";
    balloon.appendChild(string);

    // Start above the bottom edge so the balloon is visible immediately.
    balloon.style.bottom = "-80px";

    balloonsContainer.appendChild(balloon);

    console.log("Balloon created:", balloon);

    setTimeout(function() {
        balloon.remove();
    }, 9000);
}

function startBalloons() {
    if (balloonsStarted) return;

    balloonsStarted = true;

    // Launch the first group of balloons.
    for (let i = 0; i < 8; i++) {
        setTimeout(createBalloon, i * 300);
    }

    // Keep releasing balloons throughout the celebration.
    setInterval(createBalloon, 1500);
}


/* ========================================
   5. SECOND SURPRISE BUTTON
   Reveals the special message
======================================== */

secondSurpriseButton.addEventListener('click', function() {
    // Reveal the second message
    specialMessage.hidden = false;

    // Change the button text
    secondSurpriseButtonText.textContent = "You found the secret message! 💌";

    // Prevent clicking it again
    secondSurpriseButton.disabled = true;
});

const testBalloon = document.createElement("div");


/* ========================================
   BLOW OUT THE BIRTHDAY CANDLES
======================================== */

const blowOutButton = document.getElementById("blowOutButton");
const wishMessage = document.getElementById("wishMessage");

blowOutButton.addEventListener("click", function() {
    // Find every candle flame
    const flames = document.querySelectorAll(
        "#birthdayCakeSection .flame"
    );

    // Extinguish all the flames
    flames.forEach(function(flame) {
        flame.classList.add("extinguished");
    });

    // Show the birthday wish
    wishMessage.hidden = false;

    // Change the button after use
    blowOutButton.textContent = "Wish made! 💖";
    blowOutButton.disabled = true;
});
