// Typing Animation
const message = `Thank you for staying with me through every up and down.

Every moment, every laugh, every little thing we've shared for the past 29 months has made me the happiest person alive.

You are my sunshine, my home, and my forever.

Here’s to more months, more years, and a lifetime of love together.

I hope soon I could see the you that could not be affected by his name...

I love you endlessly. My Langga💖`;

const textElement = document.getElementById("typed-text");
let index = 0;

function typeLetter() {
  if (index < message.length) {
    textElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeLetter, 40); // Adjust speed here
  }
}

typeLetter();

// Floating Hearts & Petals
const symbols = ["💖", "🌸", "💗", "💞", "🌺", "❤️"];
const container = document.getElementById("floating-container");

function createFloatingSymbol() {
  const elem = document.createElement("div");
  elem.classList.add("floating");
  elem.innerText = symbols[Math.floor(Math.random() * symbols.length)];
  elem.style.left = `${Math.random() * 100}%`;
  elem.style.fontSize = `${20 + Math.random() * 20}px`;
  elem.style.animationDuration = `${8 + Math.random() * 5}s`;

  container.appendChild(elem);

  setTimeout(() => {
    container.removeChild(elem);
  }, 13000);
}

setInterval(createFloatingSymbol, 500);
