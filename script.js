const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");
const gif = document.getElementById("loveGif");
const music = document.getElementById("music");

let size = 20;

/* CLICK NO */

noBtn.addEventListener("click", () => {

  size += 10;

  yesBtn.style.fontSize = size + "px";

  /* change GIF */

  gif.src = "gif2.gif";

});

/* CLICK YES */

yesBtn.addEventListener("click", () => {


  /*change title text */
  const title = document.querySelector("h1");
  title.innerText = "I knew it! ❤️ I LOVE YOU TOO! Baby H😘M";

  /* play music */

  music.play();

  /* change to GIF */

  gif.src = "gif3.gif";

  document.getElementById("galaxy").style.display = "block";

  /* aftr  5 seconds, change to final GIF */

  setTimeout(() => {
    gif.src = "gif4.gif";
  }, 5000);

  /*show photos */
  document.querySelectorAll(".photo").forEach(photo => {
    photo.style.display = "block";
  });

  /*show video */
  document.querySelectorAll(".loveVideo").forEach(v => {
    v.style.display = "block";
    v.play();
  });

  /* hearts rain */

  setInterval(createHeart, 200);

});


function createHeart() {

  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-20px";
  heart.style.fontSize = "30px";
  heart.style.animation = "fall 3s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
};

/**
 * Function to generate a subtle star field
 */
function createStars() {
  // Select the container where stars will be placed
  const sky = document.querySelector('.shooting-stars');

  // Number of stars to create (50-80 is enough for a subtle look)
  const starCount = 60;

  for (let i = 0; i < starCount; i++) {
    // Create a new div element for each star
    const star = document.createElement('div');
    star.className = 'star';

    // Randomize the horizontal (x) and vertical (y) position (0% to 100%)
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Randomize size (0.5px to 2px) to keep them very small and subtle
    const size = Math.random() * 1.5 + 0.5;

    // Randomize animation delay and duration so they don't twinkle all at once
    const delay = Math.random() * 5;
    const duration = 3 + Math.random() * 5;

    // Apply the styles to the star element
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Apply the random timing for the CSS animation
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    // Add the star to the sky container
    sky.appendChild(star);
  }
}

// Run the function once the website finishes loading
window.onload = createStars;