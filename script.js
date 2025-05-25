// Countdown Timer
const countdownElement = document.getElementById('countdown');
const birthday = new Date("2025-06-02T00:00:00").getTime(); // Change this to the actual birthday

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance < 0) {
        countdownElement.innerHTML = "🎉 It's her special day! 🎂";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdownElement.innerHTML = `🎈 Countdown: ${days} day(s) left!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Message Wish Submission
document.getElementById('submitMessage').addEventListener('click', () => {
    const input = document.getElementById('messageInput');
    const msg = input.value.trim();
    if (msg) {
        const msgDiv = document.createElement('div');
        msgDiv.textContent = `💌 ${msg}`;
        document.getElementById('messageList').appendChild(msgDiv);
        saveMessage(msg);  // Save to Firebase
        input.value = '';
    }
});

// Guestbook Entry
document.getElementById('submitGuestbook').addEventListener('click', () => {
    const input = document.getElementById('guestbookInput');
    const msg = input.value.trim();
    if (msg) {
        const entry = document.createElement('div');
        entry.textContent = `📝 ${msg}`;
        document.getElementById('guestbookList').appendChild(entry);
        saveGuestbook(msg);  // Save to Firebase
        input.value = '';
    }
});


// Photo Upload
document.getElementById('uploadPhoto').addEventListener('click', () => {
    const fileInput = document.getElementById('photoInput');
    const file = fileInput.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('photoGallery').appendChild(img);
        };
        reader.readAsDataURL(file);
        fileInput.value = '';
    }
});

// Floating heart animation
const heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '24px';
    heart.style.opacity = 0.7;
    heart.style.zIndex = '0';
    heart.style.animation = 'floatUp 4s ease-in forwards';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 1000);

const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 0.7; }
    100% { transform: translateY(-120vh); opacity: 0; }
}`;
document.head.appendChild(style);

// Popup card close function
function closePopup() {
    const card = document.getElementById('popupCard');
    card.style.display = 'none';

 
}
