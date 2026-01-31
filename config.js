// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
// Your Valentine's name that will appear in the title
// Example: "Jade", "Sarah", "Mike"
valentineName: "Esteri",

// The title that appears in the browser tab
// You can use emojis! 💝 💖 💗 💓 💞 💕
pageTitle: "salainen viesti hihi:) 💕",

// Floating emojis that appear in the background
// Find more emojis at: https://emojipedia.org
floatingEmojis: {
hearts: ['❤️', '💖', '💝', '💗', '💓'], // Heart emojis
bears: ['🧸', '🐻'] // Cute bear emojis
},

// Questions and answers
// Customize each question and its possible responses
questions: {
first: {
text: "Tykkääks sä musta?", // First interaction
yesBtn: "Kyyyllä:)", // Text for "Yes" button
noBtn: "En todellakaa... hyi", // Text for "No" button
secretAnswer: "Mä en tykkää susta, vaan mä RAKASTANN suaaa hihh:3! 😘🥹❤️" // Secret hover message
},
second: {
text: "Kuinka paljon sä sitt rakastat mua?", // For the love meter
startText: "Näinn paljoon!", // Text before the percentage
nextBtn: "Paina tästä ❤️" // Text for the next button
},
third: {
text: "Haluuks olla mun Valentine? 🌹", // The big question!
yesBtn: "Kyllä", // Text for "Yes" button
noBtn: "ENN>:C" // Text for "No" button
}
},

// Love meter messages
// They show up depending on how far they slide the meter
loveMessages: {
extreme: "MMITTÄÄÄÄÄ SÄ RAKASTATT MUA NÄINN PALJOONN HIHIHIHI;3333????!!!!🥰😘😘😘", // Shows when they go past 5000%
high: "SIIIIS MITÄÄÄÄÄ NOINN PALJOOOOOONNN!!!!", // Shows when they go past 1000%
normal: "MMUAHHH:33!" // Shows when they go past 100%
},

// Messages that appear after they say "Yes!"
celebration: {
title: "Hihh mä oon oikeesti onnekkainn niinku hihi:333 💓💓💓😘😘🥹🥹",
message: "Mä en nyt pääse sinne sun luokse mut täs on etälahja, eli iiiisooott etähalit ja pusuutt;3🤗🤗😘😘😘❤️❤️❤️❤️!",
emojis: "💖🤗💝💋❤️💕🥹" // These will bounce around
},

// Color scheme for the website
// Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
colors: {
backgroundStart: "#ffafbd", // Gradient start (try pastel colors for a soft look)
backgroundEnd: "#ffc3a0", // Gradient end (should complement backgroundStart)
buttonBackground: "#ff6b6b", // Button color (should stand out against the background)
buttonHover: "#ff8787", // Button hover color (slightly lighter than buttonBackground)
textColor: "#ff4757" // Text color (make sure it's readable!)
},

// Animation settings
// Adjust these if you want faster/slower animations
animations: {
floatDuration: "15s", // How long it takes hearts to float up (10-20s recommended)
floatDistance: "50px", // How far hearts move sideways (30-70px recommended)
bounceSpeed: "0.5s", // Speed of bouncing animations (0.3-0.7s recommended)
heartExplosionSize: 1.5 // Size of heart explosion effect (1.2-2.0 recommended)
},

// Background Music (Optional)
// Add your own music URL after getting proper licenses
music: {
enabled: true, // Music feature is enabled
autoplay: true, // Try to autoplay (note: some browsers may block this)
musicUrl: "https://res.cloudinary.com/ddhodvyuz/video/upload/v1769868246/4c7ae65d0aa0e77fb980c6f52942342b2_m866ca.mp3", // Music streaming URL
startText: "🎵 Musat päälle", // Button text to start music
stopText: "🔇 Musat pois", // Button text to stop music
volume: 0.5 // Volume level (0.0 to 1.0)
}
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
