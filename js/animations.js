const RUNNING_GIF = "../assets/totoro-walk.gif";
const LOOKING_BACK_IMG = "../assets/totoro-walk-back.gif";
const ANIMATION_DURATION = 20000;

let img;

function startGifControl() {
  img.src = RUNNING_GIF;

  setTimeout(() => {
    setTimeout(() => {
      img.src = LOOKING_BACK_IMG;
      setTimeout(() => {
        img.src = RUNNING_GIF;
      }, ANIMATION_DURATION * 0.1);
    }, ANIMATION_DURATION * 0.05);
  }, ANIMATION_DURATION * 0.8);
}

function restartAnimation() {
  img.style.animation = "none";
  img.offsetHeight; 
  img.style.animation = `moveRight ${
    ANIMATION_DURATION / 1000
  }s linear infinite`;
  startGifControl();
}

export function startGifAnimation(targetId = "characterGif") {
  img = document.getElementById(targetId);
  if (!img) return console.warn(`GIF element #${targetId} tidak ditemukan`);

  startGifControl();
  setInterval(restartAnimation, ANIMATION_DURATION);
}
