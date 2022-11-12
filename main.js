const mainDrums = () => {
  window.onkeydown = (e) => playSound(e);
};

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const keyContainer = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (keyContainer) keyContainer.classList.add("playing");
  manageKeyPosition(keyContainer);

  audio.currentTime = 0;
  audio.play();

  /* Remove style from key */
  setTimeout(() => {
    if (keyContainer) keyContainer.classList.remove("playing");
  }, 70);
};

const manageKeyPosition = (keyContainer) => {
  let currentPosition = parseInt(keyContainer.style.marginTop.split("p")[0]);

  if (!keyContainer.style.marginTop) {
    keyContainer.style.marginTop = "20px";
  } else if (currentPosition <= 90) {
    currentPosition += 10;
    keyContainer.style.marginTop = `${currentPosition}px`;
  } else if (keyContainer) {
    keyContainer.style.marginTop = null;
  }
  console.log(currentPosition);
};

window.onload = mainDrums();
