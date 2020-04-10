playSound = (e) => {
  const audio = document.getElementById(e.keyCode);
  const key = document.getElementsByClassName(e.keyCode)[0];

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
