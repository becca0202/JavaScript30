function playSound(evt) {
  const audio = document.querySelector(`audio[data-key=${evt.code}]`);
  const key = document.querySelector(`.key[data-key=${evt.code}]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing'); //adds class upon event firing
}

function removeTransition(evt) {
  console.log(evt.propertyName);
  if (evt.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
