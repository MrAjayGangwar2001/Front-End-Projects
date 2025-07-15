const leftEye = document.getElementById("leftEye");
const rightEye = document.getElementById("rightEye");
const password = document.getElementById("password");
const mouth = document.getElementById("mouth");
const form = document.getElementById("loginForm");
const alien = document.getElementById("alien");

const beepSound = new Audio("alien-beep.mp3");
const deniedSound = new Audio("access-denied.mp3");
const grantedSound = new Audio("access-granted.mp3");

// Eye follow cursor
document.addEventListener("mousemove", (e) => {
  [leftEye, rightEye].forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const angle = Math.atan2(dy, dx);
    eye.style.transform = `translate(${Math.cos(angle) * 5}px, ${
      Math.sin(angle) * 5
    }px)`;
  });
});

// Eyes close on password focus
password.addEventListener("focus", () => {
  [leftEye, rightEye].forEach((e) => (e.style.background = "#99ffcc"));
});
password.addEventListener("blur", () => {
  [leftEye, rightEye].forEach((e) => (e.style.background = "black"));
});

// Beep on typing
password.addEventListener("input", () => {
  beepSound.play().catch(() => {});
});

// Voice
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.pitch = 1.3;
  utter.rate = 1;
  speechSynthesis.speak(utter);
}

// Launch button click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pwd = password.value;

  if (pwd !== "admin") {
    mouth.style.background = "red";
    mouth.style.height = "20px";
    mouth.style.borderRadius = "5px";
    alien.style.animation = "shake 0.5s ease-in-out 2";
    deniedSound.play();
    //speak("Oh no! Access denied!");
    //speak("Ohhh noo!");
    setTimeout(() => {
      alien.style.animation = "float 2s ease-in-out infinite";
      mouth.style.background = "#222";
      mouth.style.height = "10px";
      mouth.style.borderRadius = "20px";
    }, 1000);
  } else {
    mouth.style.background = "lime";
    mouth.style.height = "15px";
    mouth.style.borderRadius = "30px 30px 0 0";
    grantedSound.play();
    //speak("Welcome Captain! Launching spaceship!");
    alien.style.transform = "translateY(-500px) rotate(720deg)";
    alien.style.transition = "1.5s ease-in-out";
    setTimeout(() => {
      alert("👽 Login successful!");
      redirectToUniverse();
    }, 1400);
  }
});
function redirectToUniverse() {
    // Optional: form validation
    window.location.href = "planet.html";
  }

// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
 