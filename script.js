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

  music.play();

  /*change title text */
  const title = document.querySelector("h1");
  title.innerText = "I knew it! ❤️ I LOVE YOU TOO! Baby H😘M";

  /* change to GIF */

  gif.src = "gif3.gif";

  /* aftr  5 seconds, change to final GIF */

  setTimeout(() => {
    gif.src = "gif4.gif";
  }, 5000);

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

}